const jwt = require("jsonwebtoken")
const AccessCode = require("../models/AccessCode")
const { secret } = require("../config/config")

exports.generateCode = async (req, res) => {
  const { admin } = req.signedCookies
  if (!admin) return res.render("login")

  const randomCode = Math.random()
    .toString(36)
    .substr(2, 10)
  try {
    const docs = await AccessCode.create({ code: randomCode })
    res.render("generate", { code: docs.code })
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.verifyCode = async (req, res) => {
  try {
    const { code } = req.body
    const docs = await AccessCode.findOne({ code })

    if (!docs || docs.verified || Date.now() > docs.expires_at)
      throw new Error("Code isn't valid, please try again")

    const token = jwt.sign({ code }, secret)

    res.json({ token })
  } catch (err) {
    const message = err.message || "Oops, something went wrong"
    res.status(401).json({ err: true, message })
  }
}

exports.verifyToken = async (req, res) => {
  const { token } = req.body
  try {
    const { code } = await jwt.verify(token, secret)

    const accessCode = await AccessCode.findOne({ code })

    if (!accessCode) throw new Error("This code is not valid")

    res.json({ verified: true })
  } catch (err) {
    const message = err.message || "Oops, something went wrong"
    res.json({ verified: false, message })
  }
}
