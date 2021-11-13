import { SET_LOCATION } from "../actions/types"

const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return action.payload
        default:
            return state
    }
}

export default locationReducer