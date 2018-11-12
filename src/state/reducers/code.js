import { VERIFY_SUCCEEDED, VERIFY_FAILED, VERIFY_START } from "../types"

const INITIAL_STATE = {
  isLoading: true,
  isVerified: false,
  code: "",
  err: null,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case VERIFY_START:
      return {
        ...state,
        isLoading: true,
        err: null,
      }
    case VERIFY_SUCCEEDED:
      return {
        ...state,
        isVerified: true,
        code: payload.code,
        err: null,
        isLoading: false,
      }
    case VERIFY_FAILED:
      return {
        ...state,
        isVerified: false,
        err: payload.err,
        isLoading: false,
      }
    default:
      return state
  }
}
