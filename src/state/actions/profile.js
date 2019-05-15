import { createAction } from "redux-actions"
import {
  CHANGE_NAME,
  CHANGE_AVATAR,
  SET_LOGGED_ON_DATE,
  CLEAR_WELCOME_SCREEN,
  SET_DAILY_QUOTE,
} from "../types"

export const changeName = createAction(CHANGE_NAME)
export const changeAvatar = createAction(CHANGE_AVATAR)
export const clearWelcomeScreen = createAction(CLEAR_WELCOME_SCREEN)
export const setLoggedOnDate = createAction(SET_LOGGED_ON_DATE)
export const setDailyQuote = createAction(SET_DAILY_QUOTE)
