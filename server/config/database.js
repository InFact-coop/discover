const mongoose = require("mongoose")
const CONFIG = require("./config")

mongoose.connect(
  CONFIG.database,
  { useNewUrlParser: true }
)

mongoose.connection.on("error", err => {
  console.log(`connection error: ${err}`) // eslint-disable-line no-console
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected.") // eslint-disable-line no-console
})

module.exports = mongoose.connection
