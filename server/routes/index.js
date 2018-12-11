const router = require("express").Router()
const path = require("path")
const adminRoutes = require("./admin")
const userRoutes = require("./user")

router.use("/admin", adminRoutes)
router.use("/api/user", userRoutes)

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"))
})

module.exports = router
