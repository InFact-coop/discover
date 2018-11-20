import {
  CHANGE_GOAL,
  SELECT_DAY,
  SET_START_DATE,
  SET_FINISH_DATE,
  SET_DURATION,
  SELECT_TIME_OF_DAY,
  CHANGE_TIME,
  CHANGE_TECHNIQUES,
} from "../types"

const INITIAL_STATE = {
  description: "",
  daysOfWeek: [],
  timeOfDay: {
    description: "",
    time: "00:00",
  },
  startDate: "",
  finishDate: "",
  duration: "",
  techniques: [],
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_GOAL:
      return { ...state, description: payload }
    case SELECT_DAY:
      return { ...state, daysOfWeek: payload }
    case SET_START_DATE:
      return { ...state, startDate: payload }
    case SET_FINISH_DATE:
      return { ...state, finishDate: payload }
    case SET_DURATION:
      return { ...state, duration: payload }
    case SELECT_TIME_OF_DAY:
      return {
        ...state,
        timeOfDay: { ...state.timeOfDay, description: payload },
      }
    case CHANGE_TIME:
      return {
        ...state,
        timeOfDay: { ...state.timeOfDay, time: payload },
      }
    case CHANGE_TECHNIQUES:
      return {
        ...state,
        techniques: payload,
      }
    default:
      return state
  }
}
