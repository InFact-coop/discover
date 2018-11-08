import { VERIFY_SUCCESSED, VERIFY_FAILED } from "../types"

const INITIAL_STATE = {
  isVerified: false,
  code: "",
  err: null,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case VERIFY_SUCCESSED:
      return {
        ...state,
        isVerified: true,
        code: payload.code,
        err: null,
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
