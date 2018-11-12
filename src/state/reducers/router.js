import { CHANGE_VIEW, VERIFY_SUCCEEDED, VERIFY_FAILED } from "../types"

import { Loading, Home, Code } from "../../views"

const INITIAL_STATE = {
  currentView: Loading,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return { ...state, currentView: payload }
    case VERIFY_SUCCEEDED:
      return { ...state, currentView: Home }
    case VERIFY_FAILED:
      return { ...state, currentView: Code }
    default:
      return state
  }
}
