const axios = require("axios")
const r = require("ramda")

exports.querySheets = (req, res) => {
  axios
    .get(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        process.env.SHEET_ID
      }/values/Sheet1?key=${process.env.SHEETS_API_KEY}`
    )
    .then(responses => {
      const values = JSON.parse(responses).values
      const quotes = r.map(
        ([quote, author]) => ({
          quote,
          author,
        }),
        r.drop(1, values)
      )

      res.json(quotes)
    })
    .catch(err => {
      console.error("ERROR:", err) //eslint-disable-line
    })
}
