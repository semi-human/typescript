import React from 'react'
import SearchBox from '../search/searchBox';
import './header.css';
import {NavLink} from 'react-router-dom';
function Header({isAuthenticated,setAuth}) {

  const Logout = () =>{
    setAuth(false);
    localStorage.setItem('Auth',JSON.stringify(false));
  }
  return !isAuthenticated ?(
   <div className='header'>
       <nav>
          <NavLink to='/signup'>Signup</NavLink>
          <NavLink to='/signin'>Login</NavLink>
       </nav>
       <h1 className='banner'>Monsters Rolodex</h1> 
   </div>
  ) :(
    
      <div className='header'>
          <nav>
              <NavLink to='/users'>Users</NavLink>
          </nav>
          <h1 className='banner'>Monsters Rolodex</h1>
          <SearchBox placeholder="Enter a name"/>
          <nav>
              <NavLink to='/' onClick={Logout}>Logout</NavLink>
          </nav>
      </div>

  )
}

export default Header;