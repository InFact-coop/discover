import { combineReducers } from "redux"

import router from "./router"
import auth from "./auth"
import technique from "./technique"
import profile from "./profile"

export default combineReducers({
  router,
  auth,
  technique,
  profile,
})
