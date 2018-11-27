import { SELECT_TOPIC, SET_PAGE_INDEX } from "../types"

const INITIAL_STATE = {
  topic: "",
  index: 0,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SELECT_TOPIC:
      return { ...state, topic: payload }
    case SET_PAGE_INDEX:
      return { ...state, index: payload }
    default:
      return state
  }
}
