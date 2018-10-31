import { render } from "react-dom"
import { Provider } from "react-redux"
import store from "./state"
import App from "./App"

import "./styles/index.css"

const root = document.getElementById("root")
const load = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
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
