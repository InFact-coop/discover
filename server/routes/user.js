const router = require("express").Router()
const { queryDF } = require("../controllers/dialogFlow")
const { querySheets } = require("../controllers/sheets")

router.get("/dialogflow", queryDF)
router.get("/sheets", querySheets)

module.exports = router
