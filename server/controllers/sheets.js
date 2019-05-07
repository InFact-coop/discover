const request = require("request-promise")

exports.querySheets = (req, res) => {
  request(
    `https://sheets.googleapis.com/v4/spreadsheets/${
      process.env.SHEET_ID
    }/values/Sheet1?key=${process.env.SHEETS_API_KEY}`
  )
    .then(responses => {
      res.json(JSON.parse(responses).values)
    })
    .catch(err => {
      console.error("ERROR:", err) //eslint-disable-line
    })
}
