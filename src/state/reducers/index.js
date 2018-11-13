import { combineReducers } from "redux"

import router from "./router"
import code from "./code"
import technique from "./technique"

export default combineReducers({
  router,
  code,
  technique,
})
