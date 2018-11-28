const dialogflow = require("dialogflow")
const r = require("ramda")

const sessionClient = new dialogflow.SessionsClient({
  credentials: JSON.parse(process.env.GCS_KEYFILE),
})
const projectId = "discover-b86c1"
const sessionId = "lsadjfaslasdjfasdlfjjdf"
const sessionPath = sessionClient.sessionPath(projectId, sessionId)
const languageCode = "en-GB"

const valuesPath = [
  0,
  "queryResult",
  "fulfillmentMessages",
  0,
  "payload",
  "fields",
]

const getPayload = r.pipe(
  r.view(r.lensPath([...valuesPath, "responses", "listValue", "values"])),
  r.map(r.prop("stringValue"))
)

const getPostback = r.pipe(
  r.view(r.lensPath([...valuesPath, "postback", "structValue", "fields"])),
  r.map(postback => {
    const { kind } = postback
    return postback[kind]
  })
)

exports.queryDF = (req, res) => {
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
      // console.log(getPostback(responses))
      // console.log(JSON.stringify(responses))
      // if (result.intent) {
      //   // console.log(`  Intent: ${result.intent.displayName}`)
      // } else {
      //   // console.log(`  No intent matched.`)
      // }
      console.log(
        JSON.stringify(
          r.view(
            r.lensPath([0, "queryResult", "fulfillmentMessages", 0, "payload"]),
            responses
          )
        )
      )
      res.json({
        responses: getPayload(responses),
        postback: getPostback(responses),
      })
    })
    .catch(err => {
      // console.error("ERROR:", err)
    })
}
