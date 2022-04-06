import * as ACTION_TYPES from './action_types';
import axios from "axios";

export const fetchUserRequest = () => {
   return{
    type:ACTION_TYPES.FETCH_USER_REQUEST
   }
}

export const fetchUserSuccess =(user)=>{
    return{
        type:ACTION_TYPES.FETCH_USER_SUCCESS,
        payload:user
    }

}

export const fetchUserError = (error)=>{
    return{
        type:ACTION_TYPES.FETCH_USER_ERROR,
        payload:error
    }
}
export const setSearchText = value =>{
    return{
        type:ACTION_TYPES.SET_SEARCH_TXT,
        payload:value
    }
}
export const fetchUsers = () =>{
    console.log("Hello from fetch");
    return function(dispatch){    //return function doesnot have to be pure and
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")//is allowed to have async functions and use dispatch

        .then(response=>{
            ///response data
            const userList = response.data;
            dispatch(fetchUserSuccess(userList));
            console.log(userList);
        })
        .catch(error=>{
            ///errror.message
            dispatch(fetchUserError(error.message));
        })
                         
    }
}