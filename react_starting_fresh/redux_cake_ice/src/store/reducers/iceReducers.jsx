import * as ACTION_TYPES from '../actions/action_types';

const initialState ={
    numIces : 20
}

export const IceReducers = (state=initialState,action) =>{
    switch(action.type){
        case ACTION_TYPES.BUY_ICE:
            return{
                ...state,
                numIces:state.numIces - 1
            }
        default:
            return state;
    }
}