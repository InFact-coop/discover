import { combineReducers } from "redux"

import title from "./title"
import router from "./router"
import code from "./code"

export default combineReducers({
  title,
  router,
  code,
})
