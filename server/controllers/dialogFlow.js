const dialogflow = require("dialogflow")
const r = require("ramda")
const structToJson = require("../utils/structToJson")

const projectId = "discover-b86c1"
const languageCode = "en-GB"

const sessionClient = new dialogflow.SessionsClient({
  credentials: JSON.parse(process.env.GCS_KEYFILE),
})

const getPayload = r.pipe(
  r.view(r.lensPath([0, "queryResult", "fulfillmentMessages", 0, "payload"])),
  structToJson
)

exports.queryDF = (req, res) => {
  const sessionPath = sessionClient.sessionPath(projectId, req.query.sessionId)
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.query.query,
        languageCode,
      },
    },
  }

  // Send request and log result
  sessionClient
    .detectIntent(request)
    .then(responses => {
      console.log(responses[0].queryResult.intent) // eslint-disable-line
      if (!responses[0].queryResult.intent) {
        console.log(`No intent matched.`) // eslint-disable-line
      }
      res.json(getPayload(responses))
    })
    .catch(err => {
      console.error("ERROR:", err) //eslint-disable-line
    })
}
