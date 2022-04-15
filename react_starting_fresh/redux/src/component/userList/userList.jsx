import React from 'react'
import SingleUser from '../user/singleUser';
import { RiUserAddLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './user-list.css';
function UserList({allUsers,onDel}) {

  const handleDelete = id =>{
      onDel(id);
  }

  return (
    <div className='user-list'>
        {
            allUsers && allUsers.map(user=>(
                <SingleUser key={user.id} user={user} onDelete={handleDelete}/>
            ))
        }
       <div className="add-icon">
          
            <Link to="/users/add">
              <RiUserAddLine size ="10rem" color="red" />
            </Link>
         
       </div>
       
    </div>
  )
}

export default UserList;