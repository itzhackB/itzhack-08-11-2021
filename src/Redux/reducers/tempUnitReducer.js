import { CONVERT_TEMP } from "../actions/types"

const tempUnitReducer = (state = true, action) => {
    switch (action.type) {
        case CONVERT_TEMP:
            return !state
        default:
            return state
    }
}

export default tempUnitReducer