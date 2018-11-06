const router = require("express").Router()
const { generateCode } = require("../controllers/accessCode")
const { createAdmin, verifyAdmin } = require("../controllers/admin")

router.post("/accesscode", generateCode)
router.post("/signup", createAdmin)
router.post("/login", verifyAdmin)

module.exports = router
