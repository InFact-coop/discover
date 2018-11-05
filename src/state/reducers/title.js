import {
  CHANGE_TEXT_COLOR,
  CHANGE_TEXT_TO_BLACK,
  CHANGE_TEXT_TO_WHITE,
} from "../types"

const initState = {
  textColor: "#ffffff",
}
export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TEXT_COLOR:
      return { ...state, textColor: action.payload }
    case CHANGE_TEXT_TO_WHITE:
      return { ...state, textColor: "#ffffff" }
    case CHANGE_TEXT_TO_BLACK:
      return { ...state, textColor: "#000000" }
    default:
      return state
  }
}
