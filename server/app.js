require("env2")("./.env")

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const enforce = require("express-sslify")

const router = require("./routes")

const app = express()

app.set("port", process.env.PORT || 4000)

// middleware

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
}

if (process.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan("dev"))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../build")))

app.use("/", router)

module.exports = app
