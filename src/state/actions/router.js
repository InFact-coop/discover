import { createAction } from "redux-actions"

import { CHANGE_VIEW } from "../types"

// eslint-disable-next-line
export const changeView = view => createAction(CHANGE_VIEW)(view)
