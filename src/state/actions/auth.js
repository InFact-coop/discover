import axios from "axios"
import { createAction } from "redux-actions"
import * as r from "ramda" //eslint-disable-line import/no-namespace

import {
  VERIFY_FAILED,
  VERIFY_SUCCEEDED,
  VERIFY_FAILED_ROLLBACK,
} from "../types"

const verifySucceeded = createAction(VERIFY_SUCCEEDED)

const verifyFailed = err => ({
  type: VERIFY_FAILED,
  payload: { err },
  offline: {
    rollback: { type: VERIFY_FAILED_ROLLBACK },
  },
})

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
    if (errorMessage) dispatch(verifyFailed({ err: errorMessage }))
    return { err: true }
  }
}

export const verifyToken = token => async dispatch => {
  try {
    await axios.post("/api/user/codetoken", { token })
  } catch (err) {
    dispatch(verifyFailed(err))
  }
}
