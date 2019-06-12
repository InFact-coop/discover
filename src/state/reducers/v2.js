import * as r from "ramda" //eslint-disable-line

import { UPGRADE_V2 } from "../types"

import {
  NotInitialised,
  PROBLEM_SOLVING,
  BREATHING_TECHNIQUES,
  MINDFULNESS_EXERCISE,
} from "../../Constants"

import { INITIAL_STATE as STATIC_DATA_INIT_STATE } from "./staticData"

const v2Reducer = (state, { type, payload: cachedState }) => {
  switch (type) {
    case UPGRADE_V2:
      if (r.isEmpty(cachedState)) return state
      return r.any(view => ["Home", "Code"].includes(view))(
        cachedState.router.history
      )
        ? transformToV2Data(cachedState)
        : state
    default:
      return state
  }
}

const transformToV2Data = r.pipe(
  transformRouterState,
  transformProfileState,
  addNewStaticData,
  addNewTipsData,
  addNewBotState,
  transformCurrentGoalState,
  r.dissoc("auth"),
  r.dissoc("welcome")
)

const transformRouterState = prevState => {
  const { currentView, history } = r.prop("router")(prevState)
  const newRouterState = {
    currentView:
      currentView === "Home" || currentView === "Code" ? "Bot" : currentView,
    history: r.pipe(
      r.filter(view => view !== "Code"),
      r.map(view => (view === "Home" ? "Bot" : view))
    )(history),
  }
  return { ...prevState, router: newRouterState }
}

const transformProfileState = prevState => ({
  ...prevState,
  profile: {
    ...prevState.profile,
    ...prevState.welcome,
    quote: { author: "", quote: "" },
    lastLoggedOn: new Date("1970-01-01"),
  },
})

const addNewStaticData = prevState => ({
  ...prevState,
  staticData: STATIC_DATA_INIT_STATE,
})

const addNewTipsData = prevState => ({
  ...prevState,
  tips: {
    topic: "",
    index: 0,
    topicMaxIndex: "",
  },
})

const addNewBotState = prevState => ({
  ...prevState,
  bot: {
    conversation: [],
    postback: {},
    sessionId: "",
    botInitialised: NotInitialised,
    lastMessageSentAt: null,
  },
})

const transformCurrentGoalState = prevState => ({
  ...prevState,
  currentGoal: {
    ...prevState.currentGoal,
    techniques: prevState.currentGoal.techniques.map(technique =>
      updatedTechniqueNames(technique)
    ),
  },
})

const updatedTechniqueNames = technique => {
  switch (technique) {
    case "Breathing technique":
      return BREATHING_TECHNIQUES
    case "Mindfulness exercise":
      return MINDFULNESS_EXERCISE
    case "Problem Solving":
      return PROBLEM_SOLVING
    default:
      return technique
  }
}

export default v2Reducer
