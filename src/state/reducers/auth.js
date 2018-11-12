import { VERIFY_SUCCEEDED, VERIFY_FAILED, VERIFY_START } from "../types"

const INITIAL_STATE = {
  code: "",
  token: "",
  err: null,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case VERIFY_START:
      return {
        ...state,
        err: null,
      }
    case VERIFY_SUCCEEDED:
      return {
        ...state,
        ...payload,
      }
    case VERIFY_FAILED:
      return {
        ...state,
        err: payload.err,
      }
    default:
      return state
  }
}
