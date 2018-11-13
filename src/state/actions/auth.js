import axios from "axios"
import { createAction } from "redux-actions"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import { VERIFY_FAILED, VERIFY_SUCCEEDED } from "../types"

const verifySucceeded = createAction(VERIFY_SUCCEEDED)
const verifyFailed = createAction(VERIFY_FAILED)

export const verifyCode = code => async dispatch => {
  try {
    const {
      data: { token },
    } = await axios.post("/api/user/accesscode", { code })

    dispatch(verifySucceeded({ code, token }))
  } catch (err) {
    const errorMessage = r.view(
      r.lensPath(["response", "data", "message"]),
      err
    )
    if (errorMessage) return dispatch(verifyFailed({ err: errorMessage }))
  }
}

export const verifyToken = token => async dispatch => {
  try {
    const {
      data: { verified },
    } = await axios.post("/api/user/codetoken", { token })
    if (verified) dispatch(verifySucceeded({ token }))
  } catch (err) {
    dispatch(verifyFailed({ err: null }))
  }
}