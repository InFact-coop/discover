const app = require("./app")

app.listen(app.get("port"), () => {
  console.log(`app running on: ${app.get("port")}`) // eslint-disable-line no-console
})
