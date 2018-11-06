import { CHANGE_VIEW } from "../types"

import { Landing } from "../../views"

const INITIAL_STATE = {
  currentView: Landing,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return { ...state, currentView: payload }
    default:
      return state
  }
}
