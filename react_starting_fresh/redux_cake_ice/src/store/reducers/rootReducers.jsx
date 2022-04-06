import { cakeReducers } from "./cakeReducers";
import { IceReducers } from "./iceReducers";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    cake:cakeReducers,
    ice:IceReducers
})
