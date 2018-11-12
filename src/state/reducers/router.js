import { CHANGE_VIEW, VERIFY_SUCCEEDED } from "../types"

import { Loading, Home } from "../../views"

const INITIAL_STATE = {
  currentView: Loading,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return { ...state, currentView: payload }
    case VERIFY_SUCCEEDED:
      return { ...state, currentView: Home }
    default:
      return state
  }
}
