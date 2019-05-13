import { CLEAR_WELCOME_SCREEN } from "../types"

const INITIAL_STATE = {
  welcomeFlow: false,
  startQuery: "Hey I'm back",
}

export default (state = INITIAL_STATE, { type }) => {
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
