const app = require("./app")
const dbConnection = require("./config/database")

dbConnection.once("open", () => {
  console.log("connected to database") // eslint-disable-line no-console
  app.listen(app.get("port"), () => {
    console.log(`app running on: ${app.get("port")}`) // eslint-disable-line no-console
  })
})
