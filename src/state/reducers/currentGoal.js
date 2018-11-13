import { ADD_TECHNIQUE } from "../types"

const INITIAL_STATE = {
  description: "",
  days_of_week: [],
  time_of_day: {
    description: "",
    time: "",
  },
  start_date: "",
  finish_date: "",
  techniques: new Set(),
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ADD_TECHNIQUE:
      return {
        ...state,
        techniques: state.techniques.add(payload),
      }
    default:
      return { ...state }
  }
}
