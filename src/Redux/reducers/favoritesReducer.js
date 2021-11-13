import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return  [...state, action.payload]
        case DELETE_FAVORITE:
            return state.filter((Favoriteitem) => Favoriteitem.id !== action.payload)
        default:
            return state
    }
}
export default favoritesReducer