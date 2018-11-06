const jwt = require("jsonwebtoken")
const AccessCode = require("../models/AccessCode")
const { secret } = require("../config/config")

exports.generateCode = async (req, res) => {
  const randomCode = Math.random()
    .toString(36)
    .substr(2, 10)
  try {
    const docs = await AccessCode.create({ code: randomCode })
    res.json(docs)
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
    const { updatedCode } = await AccessCode.findOneAndUpdate(
      { code },
      { verified: true },
      { new: true }
    )
    const token = jwt.sign({ code: updatedCode }, secret)
    res.json({ token })
  } catch (err) {
    const message = err.message || "Something is wrong please check with"
    res.status(500).json({ err: true, message })
  }
}
