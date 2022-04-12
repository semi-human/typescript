import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';
export const Homepage = () => {
  return (
    <div>
      <Link to='./signup'>
        <button type="button">Sign Up</button>
      </Link>
      <Link to='./signin'>
        <button type="button">Login</button>
      </Link>
    </div>
  )
}
