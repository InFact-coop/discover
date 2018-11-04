const changeTextColorAction = color => ({
  type: "CHANGE_TEXT_COLOR",
  payload: color,
  offline: {
    commit: { type: "CHANGE_TEXT_TO_WHITE" },
    rollback: { type: "CHANGE_TEXT_TO_BLACK" },
  },
})

export default () => dispatch => {
  fetch("/api/random")
    .then(res => res.json())
    .then(({ color }) => {
      dispatch(changeTextColorAction(color))
    })
    .catch(() => {
      dispatch(changeTextColorAction())
    })
}
