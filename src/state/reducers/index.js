import { combineReducers } from "redux"

import router from "./router"
import staticData from "./staticData"
import profile from "./profile"
import currentGoal from "./currentGoal"
import pastGoals from "./pastGoals"
import tips from "./tips"
import chatbot from "./chatbot"

export default combineReducers({
  router,
  staticData,
  profile,
  currentGoal,
  pastGoals,
  tips,
  chatbot,
})
