const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")
const morgan = require("morgan")

const router = require("./routes")
const { secret } = require("./config/config")

const app = express()

app.set("port", process.env.PORT || 4000)

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(secret))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "../build")))

const hbs = exphbs.create({
  extname: "hbs",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  defaultLayout: "main",
})

app.set("views", path.join(__dirname, "views"))
app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.use("/", router)

module.exports = app
