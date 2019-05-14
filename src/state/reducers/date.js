import { SET_LOGGED_ON_DATE } from "../types"

const INITIAL_STATE = {
    lastLoggedOn: new Date("1970-01-01")
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_LOGGED_ON_DATE:
            return { ...state, lastLoggedOn: payload }
        default:
            return state
    }
}
