import axios from "axios"
import localForage from "localforage"
import { createAction } from "redux-actions"
import { VERIFY_FAILED, VERIFY_SUCCESSED } from "../types"

const verifySuccessed = code => createAction(VERIFY_SUCCESSED)(code)
const verifyFailed = err => createAction(VERIFY_FAILED)(err)

// eslint-disable-next-line
export const verifyCode = code => dispatch => {
  axios
    .post("/api/user/accesscode", { code })
    .then(async ({ data }) => {
      if (data.err) throw new Error(data.message)
      await localForage.setItem("code", code)
      dispatch(verifySuccessed({ code }))
    })
    .catch(err => {
      dispatch(verifyFailed({ err: err.message }))
    })
}
