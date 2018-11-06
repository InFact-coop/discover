const jwt = require("jsonwebtoken")
const AccessCode = require("../models/AccessCode")
const { secret } = require("../config/config")

exports.generateCode = (req, res) => {
  const { admin } = req.signedCookies
  if (!admin) return res.render("login")

  const randomCode = Math.random()
    .toString(36)
    .substr(2, 10)

  AccessCode.create({ code: randomCode })
    .then(({ code }) => {
      res.render("generate", { code })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

exports.verifyCode = (req, res) => {
  const { code } = req.body
  AccessCode.findOne({ code })
    .then(docs => {
      if (!docs || docs.verified || Date.now() > docs.expires_at)
        throw new Error("Code isn't valid, please check with")
      return AccessCode.findOneAndUpdate(
        { code },
        { verified: true },
        { new: true }
      )
    })
    .then(({ code }) => {
      const token = jwt.sign({ code }, secret)
      res.json({ token })
    })
    .catch(err => {
      const message = err.message || "Something is wrong please check with"
      res.status(500).json({ err: true, message })
    })
}
