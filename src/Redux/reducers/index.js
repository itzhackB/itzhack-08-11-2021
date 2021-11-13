import { combineReducers } from "redux";
import weatherRedcuer from "./weatherRedcuer";
import locationReducer from "./locationReducer";
import favoritesReducer from "./favoritesReducer";
import isLoadingReducer from "./isLoadingReducer";
import themeReducer from "./themeReducer";
import tempUnitReducer from "./tempUnitReducer";

export default combineReducers({
    weather: weatherRedcuer,
    location: locationReducer,
    favorites: favoritesReducer,
    isLoading:isLoadingReducer,
    theme:themeReducer,
    temp:tempUnitReducer
})