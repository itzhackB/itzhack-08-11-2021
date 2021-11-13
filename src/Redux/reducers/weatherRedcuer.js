import { GET_CURRENT_CITY, CURRENT_CITY_WEEK_WEATHER } from "../actions/types";

function weatherRedcuer(weather = { current: {}, weekly: [] }, action) {
    switch (action.type) {
        case GET_CURRENT_CITY:
            return {
                ...weather, current: action.payload
            }
        case CURRENT_CITY_WEEK_WEATHER:
            return {
                ...weather, 
                weekly: action.payload
            }
        default:
            return weather;
    }
}

export default weatherRedcuer;