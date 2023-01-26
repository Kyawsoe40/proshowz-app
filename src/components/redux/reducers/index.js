import { combineReducers } from "redux";
import { movieReducer } from "./movies";


const reducers= combineReducers({
    movies : movieReducer,
})

export default reducers;