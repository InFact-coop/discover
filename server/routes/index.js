const router = require("express").Router()
const path = require("path")
const adminRoutes = require("./admin")
const userRoutes = require("./user")

router.get("/random", (req, res) => {
  const randomColor = Math.random() * 0xffffff
  const color = `#${(0x1000000 + randomColor).toString(16).substr(1, 6)}`
  res.json({ color })
})

router.use("/admin", adminRoutes)
router.use("/user", userRoutes)

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"))
})

module.exports = router
