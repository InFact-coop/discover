import { SAVE_CONVERSATION } from "../types"

const INITIAL_STATE = {
  conversation: [],
  postback: {},
  sessionId: "",
  botInitialised: "NotInitialised",
  quote: {},
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SAVE_CONVERSATION:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
