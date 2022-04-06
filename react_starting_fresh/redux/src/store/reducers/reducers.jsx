import * as ACTION_TYPES from '../actions/action_types';


const initialState={
    isLoading:false,
    users:[],
    error:'',
    searchField:''
}
export const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_USER_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case ACTION_TYPES.FETCH_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                users:action.payload,
                error:''
            }
        case ACTION_TYPES.FETCH_USER_ERROR:
            return{
                ...state,
                isLoading:false,
                users:[],
                error:action.payload
            }
            case ACTION_TYPES.SET_SEARCH_TXT:
                return{
                    ...state,
                    searchField:action.payload
                }
        default:
            return state; 
    }
}