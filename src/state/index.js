import { createStore, compose, applyMiddleware } from "redux"
import { offline } from "@redux-offline/redux-offline"
import offlineConfig from "@redux-offline/redux-offline/lib/defaults"
import thunk from "redux-thunk"
import reducer from "./reducers"

import { UPGRADE_V2 } from "./types"

import { load } from ".."

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
    offline({
      ...offlineConfig,
      persistCallback: (_, prevState) => {
        store.dispatch({ type: UPGRADE_V2, payload: prevState })
        load()
      },
    })
  )
)

export default store
