import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [mobileMenu,setMobileMenu] = useState(false);  
  return (
    <div>
       <header className='header'>
            <div className="container">
                <div className="categories">
                    <span className="fa-solid fa-border-all"></span>
                    <h4>
                        Categories <i className='fa fa-chevron-down'></i>
                    </h4>
                </div>

                <div className="navLink">
                    <ul className="nav">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/pages">Pages</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">User Account</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendor">Vendor Account</NavLink>
                        </li>
                         <li>
                            <NavLink to="/track">Track my order account</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <button className="toggle" onClick={()=> setMobileMenu(!mobileMenu)}>
                        {console.log(mobileMenu)}
                        {
                           
                           mobileMenu ? <i className='fas fa-times close home-bth'></i> :
                            <i className='fas fa-bars open'></i>
                        }
                    </button>
                </div>
            </div>
       </header> 
    </div>
  )
}

export default Navbar;