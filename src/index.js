import { render } from "react-dom"
import { Provider } from "react-redux"
import store from "./state"
import App from "./App"

import "./styles/index.css"

const root = document.getElementById("root")

//eslint-disable-next-line
export const load = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )

document
  .querySelector("meta[name=viewport]")
  .setAttribute(
    "content",
    `height=${window.innerHeight}, width=${
      window.innerWidth
    }, initial-scale=1, maximum-scale=1, user-scalable=no`
  )

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

if (
  process.env.NODE_ENV === "production" &&
  "serviceWorker" in navigator &&
  !iOS
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration) // eslint-disable-line no-console
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError) // eslint-disable-line no-console
      })
  })
}
