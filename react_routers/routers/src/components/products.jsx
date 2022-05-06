import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
const Products = () => {
  return (
    <div>
        <p>Products</p>
        <input type="search" placeholder="Enter something to search"/>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products