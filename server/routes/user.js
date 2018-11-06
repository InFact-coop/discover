const router = require("express").Router()
const { verifyCode } = require("../controllers/accessCode")

router.post("/accesscode", verifyCode)

module.exports = router
