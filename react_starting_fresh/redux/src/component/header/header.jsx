import React from 'react'
import SearchBox from '../search/searchBox';
import './header.css';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
        <nav>
            <NavLink to='/users'>Users</NavLink>
        </nav>
        <h1 className='banner'>Monsters Rolodex</h1>
        <SearchBox placeholder="Enter a name"/>
    </div>
    
  )
}

export default Header