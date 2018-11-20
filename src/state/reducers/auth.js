import {
  VERIFY_SUCCEEDED,
  VERIFY_FAILED,
  VERIFY_START,
  VERIFY_FAILED_ROLLBACK,
} from "../types"

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
        ...INITIAL_STATE,
        err: payload.err,
      }
    case VERIFY_FAILED_ROLLBACK:
      return {
        ...state,
      }
    default:
      return state
  }
}
