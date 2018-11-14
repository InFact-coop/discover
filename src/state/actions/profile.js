import { createAction } from "redux-actions"
import { CHANGE_NAME, CHANGE_AVATAR } from "../types"

export const changeName = createAction(CHANGE_NAME)
export const changeAvatar = createAction(CHANGE_AVATAR)
