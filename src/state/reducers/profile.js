import { CHANGE_NAME, CHANGE_AVATAR } from "../types"

const INITIAL_STATE = {
  name: "",
  avatar: "",
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CHANGE_NAME:
      return { ...state, name: payload }
    case CHANGE_AVATAR:
      return { ...state, avatar: payload }
    default:
      return state
  }
}
