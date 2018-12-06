import { CHANGE_VIEW, VERIFY_SUCCEEDED, BACK_TO_PREVIOUS_VIEW } from "../types"
import { Loading, Name } from "../../views"

const INITIAL_STATE = {
  currentView: Loading,
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
    case VERIFY_SUCCEEDED:
      return {
        ...state,
        currentView: Name,
      }
    default:
      return state
  }
}
