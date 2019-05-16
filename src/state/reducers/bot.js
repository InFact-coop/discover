import { SAVE_BOT_STATE } from "../types"
import { NotInitialised } from "../../Constants"

const BOT_INIT_STATE = {
  conversation: [],
  postback: {},
  sessionId: "",
  botInitialised: NotInitialised,
  lastMessageSentAt: null,
}

const reducer = (state = BOT_INIT_STATE, { payload, type }) => {
  switch (type) {
    case SAVE_BOT_STATE:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

export { reducer as default, BOT_INIT_STATE }
