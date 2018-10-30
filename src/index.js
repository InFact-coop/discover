import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import store from "./state"
import App from "./App"

import "./styles/index.css"

const root = document.getElementById("root")
const load = () =>
  render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    root
  )

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept("./App", load)
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration)
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

load()
