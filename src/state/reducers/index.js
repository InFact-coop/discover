import { combineReducers } from "redux"

import router from "./router"
import auth from "./auth"
import staticData from "./staticData"
import profile from "./profile"
import currentGoal from "./currentGoal"
import pastGoals from "./pastGoals"

export default combineReducers({
  router,
  auth,
  staticData,
  profile,
  currentGoal,
  pastGoals,
})
