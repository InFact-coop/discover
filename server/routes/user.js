const router = require("express").Router()
const { verifyCode, verifyToken } = require("../controllers/accessCode")

router.post("/accesscode", verifyCode)
router.post("/codetoken", verifyToken)

module.exports = router
