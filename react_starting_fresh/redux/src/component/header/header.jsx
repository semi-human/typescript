import React,{useEffect} from 'react'
import SearchBox from '../search/searchBox';
import './header.css';
import {NavLink ,Link} from 'react-router-dom';
function Header({isAuthenticated,setAuth}) {
   let userName = localStorage.getItem('UserName');
  const Logout = () =>{
    setAuth(false);
    localStorage.setItem('Auth',JSON.stringify(false));
    localStorage.setItem('UserName','');
  }
  return !isAuthenticated ?(
   <div className='header'>
      <h1 className='banner'>
              <Link to="/users" className='linked'>Monsters Rolodex</Link>
       </h1>
       <nav>
          <NavLink to='/signup' className='nav-sign'>Signup</NavLink>
          <NavLink to='/signin' className='nav-log'>Login</NavLink>
       </nav>
       
   </div>
  ) :(
    
      <div className='header'>
          <h1 className='banner'>
              <Link to="/users" className='linked'>Monsters Rolodex</Link>
          </h1>
          <nav>
              <NavLink to='/users'>Users</NavLink>
          </nav>
         
          <SearchBox placeholder="Enter a name"/>
           {userName !== '' ? `Hello ${userName}` : ''} 
          <nav>
              <NavLink to='/' onClick={Logout}>Logout</NavLink>
          </nav>
      </div>

  )
}

export default Header;