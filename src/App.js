import { Fragment } from "react"
import { hot } from "react-hot-loader"
import { Helmet } from "react-helmet"

import Router from "./views"

const App = () => (
  <Fragment>
    <Helmet>
      <title>DISCOVERbot</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="DISCOVERbot" />
      <link href="manifest.json" rel="manifest" />
    </Helmet>
    <Router />
  </Fragment>
)

export default hot(module)(App)
