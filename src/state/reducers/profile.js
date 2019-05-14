import {
  CHANGE_NAME,
  CHANGE_AVATAR,
  CLEAR_WELCOME_SCREEN,
  SET_LOGGED_ON_DATE,
} from "../types"

const INITIAL_STATE = {
  name: "",
  avatar: "",
  welcomeFlow: true,
  startQuery: "Initial flow",
  quote: "",
  lastLoggedOn: new Date("1970-01-01"),
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_NAME:
      return { ...state, name: payload }
    case CHANGE_AVATAR:
      return { ...state, avatar: payload }
    case CLEAR_WELCOME_SCREEN:
      return {
        ...state,
        welcomeFlow: false,
        startQuery: "Hey I'm back",
      }
    case SET_LOGGED_ON_DATE:
      return { ...state, lastLoggedOn: payload }
    default:
      return state
  }
}
