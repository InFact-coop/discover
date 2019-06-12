const axios = require("axios")
const r = require("ramda")

exports.querySheets = async (req, res, next) => {
  try {
    const responses = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${
        process.env.SHEET_ID
      }/values/Sheet1?key=${process.env.SHEETS_API_KEY}`
    )

    const values = responses.data.values

    const quotes = r.map(
      ([quote, author]) => ({
        quote,
        author,
      }),
      r.drop(1, values)
    )

    return res.json(quotes)
  } catch (error) {
    console.error("Error retrieving Google Sheets data: ", error) //eslint-disable-line
    return next(error)
  }
}
