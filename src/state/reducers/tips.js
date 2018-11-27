import { SELECT_TOPIC, SET_PAGE_INDEX } from "../types"
import { getTipSections } from "../../components/TipSections"

const INITIAL_STATE = {
  topic: "",
  index: 0,
  topicMaxIndex: "",
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SELECT_TOPIC:
      return {
        ...state,
        topic: payload,
        topicMaxIndex: getTipSections(payload).length,
      }
    case SET_PAGE_INDEX:
      return { ...state, index: payload }
    default:
      return state
  }
}
