import cartReducer from "./reducers/cartReducer";
import { createStore } from "redux";
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    cartReducer
})
export const store = createStore(rootReducer);
export default rootReducer;
