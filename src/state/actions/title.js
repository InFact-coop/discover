const axios = require("axios")
import {
  CHANGE_TEXT_COLOR,
  CHANGE_TEXT_TO_BLACK,
  CHANGE_TEXT_TO_WHITE,
} from "../types"

const changeTextColorAction = color => ({
  type: CHANGE_TEXT_COLOR,
  payload: color,
  offline: {
    commit: { type: CHANGE_TEXT_TO_WHITE },
    rollback: { type: CHANGE_TEXT_TO_BLACK },
  },
})

export default () => dispatch => {
  axios("/api/random")
    .then(({ data: { color } }) => {
      dispatch(changeTextColorAction(color))
    })
    .catch(() => {
      dispatch(changeTextColorAction())
    })
}
