const Admin = require("../models/Admin")
const { adminAccessToken } = require("../config/config")

exports.createAdmin = (req, res) => {
  const { username, password, token } = req.body
  if (adminAccessToken !== token)
    return res.json({
      err: true,
      message: "please provide access token to create and admin",
    })
  Admin.create({ username, password })
    .then(() => {
      res.end()
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

exports.verifyAdmin = (req, res) => {
  const { username, password } = req.body
  Admin.findOne({ username })
    .then(docs => {
      if (!docs) throw new Error("Username doesn't exist")
      if (!docs.validPassword(password)) throw new Error("wrong password")
      res.end()
    })
    .catch(err => {
      const message = err.message || "Something is wrong please check with"
      res.status(500).json({ err: true, message })
    })
}
