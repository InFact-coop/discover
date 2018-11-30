import { SELECT_TOPIC, SET_PAGE_INDEX } from "../types"
import { createAction } from "redux-actions"

export const selectTopic = createAction(SELECT_TOPIC)
export const setPageIndex = createAction(SET_PAGE_INDEX)
