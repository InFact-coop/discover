import { SAVE_CONVERSATION } from "../types"

const INITIAL_STATE = {
  conversation: [],
  postback: {},
  sessionId: "",
  botInitialised: "NotInitialised",
  quote: { author: "", quote: "" },
  lastMessageSentAt: new Date("1970-01-01").getTime(),
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
