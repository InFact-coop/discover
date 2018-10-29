const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const morgan = require("morgan")

const router = require("./routes")

const app = express()

const port = process.env.PORT || 4000

// middleware
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "../build")))

app.use("/", router)

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`listening on port http://localhost:${port}`)
})
