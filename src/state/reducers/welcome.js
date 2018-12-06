import { CLEAR_WELCOME_SCREEN } from "../types"

const INITIAL_STATE = {
  welcomeFlow: true,
  startQuery: "Initial flow",
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CLEAR_WELCOME_SCREEN:
      return {
        ...state,
        welcomeFlow: false,
        startQuery: "Hey I'm back",
      }
    default:
      return state
  }
}
