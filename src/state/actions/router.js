import { createAction } from "redux-actions"

import { CHANGE_VIEW, BACK_TO_PREVIOUS_VIEW } from "../types"

export const changeView = createAction(CHANGE_VIEW)
export const backToPreviousView = createAction(BACK_TO_PREVIOUS_VIEW)
