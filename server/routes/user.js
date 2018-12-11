const router = require("express").Router()
const { verifyCode, verifyToken } = require("../controllers/accessCode")
const { queryDF } = require("../controllers/dialogFlow")

router.post("/accesscode", verifyCode)
router.post("/codetoken", verifyToken)
router.get("/dialogflow", queryDF)

module.exports = router
