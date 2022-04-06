import { rootReducer } from "./reducers/reducers";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'

export const store = createStore(rootReducer,applyMiddleware(thunk));

