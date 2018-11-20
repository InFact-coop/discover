import {
  ARCHIVE_GOAL,
  CLEAR_CURRENT_GOAL,
  SET_ACTUAL_FINISH_DATE,
} from "../types"
import { createAction } from "redux-actions"

export const archiveGoal = createAction(ARCHIVE_GOAL)
export const clearCurrentGoal = createAction(CLEAR_CURRENT_GOAL)
export const setActualFinishDate = createAction(SET_ACTUAL_FINISH_DATE)
