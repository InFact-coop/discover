import { combineReducers } from "redux"

import router from "./router"
import auth from "./auth"

export default combineReducers({
  router,
  auth,
})
