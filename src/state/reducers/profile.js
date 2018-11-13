import { CHANGE_NAME } from "../types"

const INITIAL_STATE = {
  name: "",
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_NAME:
      return { ...state, name: payload }
    default:
      return state
  }
}
