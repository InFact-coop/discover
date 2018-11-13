import { createAction } from "redux-actions"
import { ADD_TECHNIQUE } from "../types"

//eslint-disable-next-line
export const addTechnique = technique => createAction(ADD_TECHNIQUE)(technique)
