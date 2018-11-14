import { CHANGE_GOAL } from "../types"

const INITIAL_STATE = {
  description: "",
  days_of_week: [],
  time_of_day: {
    description: "",
    time: "",
  },
  start_date: "",
  finish_date: "",
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_GOAL:
      return { ...state, description: payload }
    default:
      return state
  }
}
