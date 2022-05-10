import *  as ACTION_TYPES from './action_types';


export const addItem = (product) =>{
    return{
        type:ACTION_TYPES.ADD_ITEM,
        payload:product
    }
}

export const delItem = (product) =>{
    return {
        type:ACTION_TYPES.DEL_ITEM,
        payload:product
    }
}

export const delItemBtn = (product) =>{
    return {
        type:ACTION_TYPES.DEL_ITEM_BTN,
        payload:product
    }
}

