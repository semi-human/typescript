import * as ACTION_TYPES from '../actions/action_types';

const cart = []
const cartReducer = (state = cart,action) =>{
    switch(action.type)
    {
        case ACTION_TYPES.ADD_ITEM :
            const product = action.payload;
            console.log(state);
            //check if product exists
            const exist = state.find(x => x.id === product.id);
            if(exist)
            {
                return state.map(item =>
                    item.id === product.id ? { ...item, qty:item.qty + 1} : item
                )
            }else{
                return[
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            }
        case ACTION_TYPES.DEL_ITEM:

            //check if product exists
            const exist1 = state.find(item => item.id === product.id);
            if(exist1.qty === 1)
            {
                return state.filter(item => item.id !== exist1.id 
                )
            }else{
               return state.map(item =>
                    item.id === exist1.id ? {...item, qty:item.qty - 1} : item)
               
            }
        default:
            return state;

            
    }
}

export default cartReducer;