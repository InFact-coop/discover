const router = require("express").Router()
const { queryDF } = require("../controllers/dialogFlow")

router.get("/dialogflow", queryDF)

module.exports = router
