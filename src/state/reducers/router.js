import { CHANGE_VIEW, BACK_TO_PREVIOUS_VIEW } from "../types"
import { Home } from "../../views"

const INITIAL_STATE = {
  currentView: Home,
  history: [],
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_VIEW:
      if (payload.page)
        return {
          ...state,
          history: payload.history,
          currentView: payload.page,
        }
      return {
        ...state,
        history: [...state.history, state.currentView],
        currentView: payload,
      }
    case BACK_TO_PREVIOUS_VIEW: {
      return {
        ...state,
        currentView: state.history.pop(),
      }
    }
    default:
      return state
  }
}
