const Admin = require("../models/Admin")
const { adminAccessToken } = require("../config/config")

exports.createAdmin = async (req, res) => {
  const { username, password, token } = req.body
  if (adminAccessToken !== token)
    return res.json({
      err: true,
      message: "please provide access token to create and admin",
    })
  try {
    await Admin.create({ username, password })
    res.end()
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.verifyAdmin = async (req, res) => {
  const { username, password } = req.body
  try {
    const docs = await Admin.findOne({ username })
    if (!docs) throw new Error("Username doesn't exist")
    if (!docs.validPassword(password)) throw new Error("wrong password")
    res.cookie("admin", username, {
      expires: new Date(Date.now() + 900000000000),
      signed: true,
    })
    res.render("generate")
  } catch (err) {
    const message = err.message || "Something is wrong please check with"
    res.status(500).json({ err: true, message })
  }
}

exports.adminPage = (req, res) => {
  const { admin } = req.signedCookies
  if (admin) return res.render("generate")
  res.render("login")
}
