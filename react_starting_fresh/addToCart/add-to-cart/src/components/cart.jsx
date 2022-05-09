import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer);
  console.log(cartItems);
  return (
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
                    <h4 className='border border-dark w-25 text-center fw-bolder p-1'>+</h4> 
                    <h4 className='border border-dark w-25 text-center fw-bolder p-1'>{item.qty}</h4>
                    <h4 className='border border-dark w-25 text-center fw-bolder p-1'>-</h4>   
                 </div>
              </div>
              <div className="col-md-2 text-center">
                  <h4>{item.price.toFixed(2)}</h4>  
              </div>
              <div className="col-md-2 text-center">
                  <h4>{(item.qty * item.price).toFixed(2)}</h4>  
              </div>
          </div>
          ))
        }

        
    </div>
  )
}

export default Cart