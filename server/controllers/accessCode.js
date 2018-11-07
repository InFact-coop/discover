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
      throw new Error("Code isn't valid, please check with")
    await AccessCode.findOneAndUpdate(
      { code },
      { verified: true },
      { new: true }
    )
    const token = jwt.sign({ code }, secret)
    res.cookie("code_token", token, {
      expires: new Date(Date.now() + 900000000000),
    })
    res.json({ code })
  } catch (err) {
    const message = err.message || "Something is wrong please check with"
    res.json({ err: true, message })
  }
}

exports.verifyToken = async (req, res) => {
  const { code_token } = req.cookies
  const { code } = req.body
  try {
    const { code: decodedCode } = await jwt.verify(code_token, secret)
    if (decodedCode !== code) throw new Error()
    res.json({ verified: true })
  } catch (err) {
    res.json({ verified: false })
  }
}
