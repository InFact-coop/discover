import { combineReducers } from "redux"
import reduceReducers from "reduce-reducers"

import router from "./router"
import profile from "./profile"
import currentGoal from "./currentGoal"
import pastGoals from "./pastGoals"
import tips from "./tips"
import bot from "./bot"
import staticData from "./staticData"
import v2 from "./v2"

const combinedReducers = combineReducers({
  router,
  staticData,
  profile,
  currentGoal,
  pastGoals,
  tips,
  bot,
})

export default reduceReducers(combinedReducers, v2)
