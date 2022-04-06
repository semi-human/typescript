import React from 'react'
import SingleUser from '../user/singleUser';
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
       
    </div>
  )
}

export default UserList;