import axios from "axios"
import localForage from "localforage"
import { createAction } from "redux-actions"
import { VERIFY_FAILED, VERIFY_SUCCEEDED, VERIFY_START } from "../types"

const verifyStart = () => createAction(VERIFY_START)
const verifySucceeded = code => createAction(VERIFY_SUCCEEDED)(code)
const verifyFailed = err => createAction(VERIFY_FAILED)(err)

export const verifyCode = code => async dispatch => {
  dispatch(verifyStart())
  try {
    const { data } = await axios.post("/api/user/accesscode", { code })
    if (data.err) throw new Error(data.message)
    await localForage.setItem("code", code)
    dispatch(verifySucceeded({ code }))
  } catch (err) {
    dispatch(verifyFailed({ err: err.message }))
  }
}

export const verifyToken = code => async dispatch => {
  dispatch(verifyStart())
  const {
    data: { verified },
  } = await axios.post("/api/user/codetoken", { code })

  if (!verified) dispatch(verifyFailed({ err: null }))
  else dispatch(verifySucceeded({ code }))
}
