import { createStore, compose, applyMiddleware } from "redux"
import { offline } from "@redux-offline/redux-offline"
import offlineConfig from "@redux-offline/redux-offline/lib/defaults"
import thunk from "redux-thunk"
import reducer from "./reducers"

import { load } from ".."

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
    offline({
      ...offlineConfig,
      persistCallback: () => load(),
    })
  )
)

export default store
