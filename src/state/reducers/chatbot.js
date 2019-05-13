import { SAVE_CONVERSATION } from "../types"

const INITIAL_STATE = {
  conversation: [],
  postback: {},
  sessionId: "",
  botInitialised: "NotInitialised",
  quote: {},
  lastMessageSentAt: 0,
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
