import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import cartReducer from '../store/reducers/cartReducer'
const Navbar = () => {
  const state = useSelector(state => state.cartReducer) ; 
  console.log(state);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://iconape.com/wp-content/files/ly/153731/svg/153731.svg" alt="" width="60" height="34" class="d-inline-block align-text-top"/>
                        KARURA
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">Contact Us</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="buttons">
                    <NavLink to="/signin" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faSignIn} className='me-2'/>
                        Login
                    </NavLink>
                    <NavLink to="/signup" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faUserPlus} className='me-2'/>
                        Register
                    </NavLink>
                    <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faCartShopping} className='me-2'/>
                        Cart ({state.length})
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;