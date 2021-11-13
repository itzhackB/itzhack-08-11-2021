import { SET_THEME } from "../actions/types"

const themeReducer = (state = false, action) => {
    switch (action.type) {
        case SET_THEME:
            return !state
        default:
            return state
    }
}

export default themeReducer