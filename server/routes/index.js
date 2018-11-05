const router = require("express").Router()
const path = require("path")

router.get("/random", (req, res) => {
  const randomColor = Math.random() * 0xffffff
  const color = `#${(0x1000000 + randomColor).toString(16).substr(1, 6)}`
  res.json({ color })
})
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"))
})

module.exports = router
