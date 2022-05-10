import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addItem, delItem, delItemBtn } from '../store/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer);
  let total = 0;
  console.log(cartItems);
  const dispatch = useDispatch();

    const addProduct = product =>{
        dispatch(addItem(product));
  }
  const delProduct = product =>{
    dispatch(delItem(product));
}
const delProductBtn = product =>{
  dispatch(delItemBtn(product));
}
  return (
   
     cartItems.length === 0 ? (
     <>
        <div className='container mt-5'>
          <h3>Your Shopping Cart</h3>
          <div className="border border-muted bg-light mt-5 ms-5 me-5">
            <h3 className='display-6 p-4'>Your shopping cart is empty</h3>
          </div>
        </div>
     </>
     ): (
          <div className='container mt-5'>
          <div className="d-flex flex-row justify-content-between">
            <h3>Your Shopping Cart</h3>
            <h3>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</h3>
          </div>
          <hr/>
          <div className="d-flex flex-row text-muted ">
            <h4 className='col-md-6'>PRODUCT DETAILS</h4>
            <h4 className='col-md-2 text-center'>QUANTITY</h4>
            <h4 className='col-md-2 text-center'>PRICE</h4>
            <h4 className='col-md-2 text-center'>TOTAL</h4>
          </div>
          {
            cartItems.map(item=>(
            <div className='row border mb-2 p-2 d-flex flex-row justify-content-center align-items-center'>
                <div className="col-md-2">
                    <img src={item.image} alt={item.title} height="200px" width="200px"/>
                </div>
                <div className="col-md-4">
                    <h4>{item.category}</h4>
                    <h2>{item.title}</h2>
                </div>
                <div className="col-md-2 text-center">
                  <div className="d-flex flex-row justify-content-around">
                      <button className='btn btn-outline-dark w-25 text-center fw-bolder p-1' onClick={()=>addProduct(item)}>+</button> 
                      <h4 className='border bordr-dark w-25 text-center fw-bolder p-1'>{item.qty}</h4>
                      <button className='btn btn-outline-dark w-25 text-center fw-bolder p-1' onClick={()=>delProduct(item)}>-</button>   
                  </div>
                </div>
                <div className="col-md-2 text-center">
                    <h4>{item.price.toFixed(2)}</h4>  
                </div>
                <div className="col-md-2 d-flex flex-row justify-content-center align-items-center text-center">
                    <h4 className='ms-5'>{(item.qty * item.price).toFixed(2)}</h4>  
                    <button className='btn btn-outline-danger ms-5 px-2 py-0 my-0 mx-2' onClick={()=> delProductBtn(item)}><FontAwesomeIcon icon={faClose}/></button>
                </div>
            </div>
            
            ))

          
          }

          {
            cartItems.map(item =>{
              total += item.qty * item.price
              return ''
            })
            
          }  
          <div className="row mt-4">
           <div className="col-md-6">
              <button className='btn btn-primary text-white w-50 py-2 rounded'>Continue Shopping</button>
           </div>
           <div className='col-md-6 d-flex flex-column justify-content-end align-items-end'>
              <h4 className='me-5 pe-5 mb-3'><span className='me-5 fw-bold'>Sub-Total:</span> ${total.toFixed(2)}</h4>
              <button className='btn btn-success text-white w-50 me-5 rounded'>Go to Checkout</button>
           </div>
          </div>
          
          
      </div>
     )
     
  )
}

export default Cart