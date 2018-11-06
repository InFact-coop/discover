const router = require("express").Router()
const { generateCode } = require("../controllers/accessCode")
const { createAdmin, verifyAdmin, adminPage } = require("../controllers/admin")

router.get("/", adminPage)
router.get("/accesscode", generateCode)
router.post("/signup", createAdmin)
router.post("/login", verifyAdmin)

module.exports = router
