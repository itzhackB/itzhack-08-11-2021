import { ADD_FAVORITE, DELETE_FAVORITE } from "./types"

export const addFavorite = (id, name) => {
    return {
        type: ADD_FAVORITE,
        payload: {
            id: id,
            name: name
        }
    }
}

export const deleteFavorite = id => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}