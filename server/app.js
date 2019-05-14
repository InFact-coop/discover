require("env2")("./.env")

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const morgan = require("morgan")
const enforce = require("express-sslify")

const router = require("./routes")

const app = express()

app.set("port", process.env.PORT || 4000)

// middleware

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "../build")))

app.use("/", router)

module.exports = app
