import { ARCHIVE_GOAL } from "../types"

const INITIAL_STATE = []

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ARCHIVE_GOAL:
      return [...state, payload]
    default:
      return state
  }
}
