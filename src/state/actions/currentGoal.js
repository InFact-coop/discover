import { createAction } from "redux-actions"
import {
  CHANGE_GOAL,
  SELECT_DAY,
  SET_START_DATE,
  SET_SCHEDULED_FINISH_DATE,
  SET_DURATION,
  SELECT_TIME_OF_DAY,
  CHANGE_TIME,
  CHANGE_TECHNIQUES,
} from "../types"

export const changeGoal = createAction(CHANGE_GOAL)
export const selectDay = createAction(SELECT_DAY)
export const setStartDate = createAction(SET_START_DATE)
export const setScheduledFinishDate = createAction(SET_SCHEDULED_FINISH_DATE)
export const setDuration = createAction(SET_DURATION)
export const selectTimeOfDay = createAction(SELECT_TIME_OF_DAY)
export const changeTime = createAction(CHANGE_TIME)
export const changeTechniques = createAction(CHANGE_TECHNIQUES)
