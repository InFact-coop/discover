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

load()
