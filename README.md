# DISCOVER

An app for [South London and Maudsley NHS Trust](https://www.slam.nhs.uk/)'s [award winning](https://www.theguardian.com/society/2018/nov/28/public-service-awards-2018-all-winners) [DISCOVER](https://www.slam.nhs.uk/about-us/clinical-academic-groups/child-and-adolescent/discover-overview) programme.

## Instructions for running locally

1. Clone the repo and navigate to it:

```
git clone https://github.com/InFact-coop/discover.git
cd discover
```

2. Create a .env file in the root of the project with the following variables:

```
SHEETS_API_KEY:xx_yourstringhere_xx
SHEET_ID:xx_yourstringhere_xx
GCS_KEYFILE:xx_yourjsonkeyhere_xx
```

The `SHEETS_API_KEY` should be linked to a [Google API console](https://console.developers.google.com/) account with a sheet in it containing daily quotes, according to the following format:

![](./QuoteSheet.png)

You can get the `SHEET_ID` from the url of your Google Sheet - the url has the format `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`

The `GCS_KEYFILE` env variable is for accessing [Dialogflow](https://dialogflow.com/) and once you have set up an agent on Dialogflow you can access the keyfile following the instructions [here](https://dialogflow.com/docs/reference/v2-auth-setup). Make sure to download the key as JSON and enter this as your env variable. It should be formatted something like this:

```
{
"type":"service_account",
"project_id":"",
"private_key_id":"",
"private_key":"-----BEGIN PRIVATE KEY-----\n\n-----END PRIVATE KEY-----\n",
"client_email":"",
"client_id":"",
"auth_uri":"",
"token_uri":"",
"auth_provider_x509_cert_url":"",
"client_x509_cert_url":""
}
```

3. Run `yarn install` to install dependencies.

4. To start the app locally, run `yarn server` and `yarn neutrino-start` - the app will then be accessible on http://localhost:5000

5. In development, you may wish to increase the speed of the bot messages and skip the onboarding phase. To do so:

   - navigate to src/views/Bot.js and replace `Math.floor(Math.random() * 2000) + 500` with `0`
   - navigate to src/state/reducers/profile.js and replace in the initial state the following `welcomeFlow: false, startQuery: "Hey I'm back",`

6. If you wish to debug the production build run `yarn build` and `yarn server` and then go to `localhost:4000`
