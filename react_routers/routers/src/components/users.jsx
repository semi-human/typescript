import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
const Users = () => {
  const [searchParams,setSearchParams] = useSearchParams();  
  const showActiveUsers = searchParams.get('filter') === 'active';
  console.log(showActiveUsers); 
  return (
    <div>
        <nav>
            <Link to='1'>User 1</Link>
            <Link to='2'>User 2</Link>
            <Link to='3'>User 3</Link>
            <Link to='admin'>Admin User</Link>
            <Link to='admins'>Admin User following dynamic route</Link>
        </nav>
        <Outlet/>

        <div>
            <button onClick={()=>{setSearchParams({filter:'active'})}}>Active Users</button>
            <button onClick={()=>{setSearchParams({})}}>Reset Search Params</button>
        </div>
        {
            showActiveUsers ? <h2>Showing active users</h2> : <h2>No active users filter</h2>
        }
    </div>
  )
}

export default Users