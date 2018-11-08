import axios from "axios"
import { createAction } from "redux-actions"
import localForage from "localforage"
import { Code } from "../../views"

import { CHANGE_VIEW } from "../types"

export const changeView = view => createAction(CHANGE_VIEW)(view)

export const verifyToken = () => async dispatch => {
  const code = await localForage.getItem("code")
  axios.post("/api/user/codetoken", { code }).then(({ data: { verified } }) => {
    if (!verified) dispatch(changeView(Code))
  })
}
