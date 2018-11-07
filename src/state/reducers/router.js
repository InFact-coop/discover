import { CHANGE_VIEW, VERIFY_SUCCESSED } from "../types"

import { Code, Home } from "../../views"

const INITIAL_STATE = {
  currentView: Code,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return { ...state, currentView: payload }
    case VERIFY_SUCCESSED:
      return { ...state, currentView: Home }
    default:
      return state
  }
}
