import * as ACTION_TYPES from '../actions/action_types';
const initialState={
    numCakes:10
}
export const cakeReducers = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.BUY_CAKE:
            return{
                ...state,
                numCakes: state.numCakes - 1
            }
        default:
            return state;
    }
}