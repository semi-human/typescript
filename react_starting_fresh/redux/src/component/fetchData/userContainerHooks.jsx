import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  fetchUsers } from '../../store/actions/actions';
import { store } from '../../store';

import UserList from '../userList/userList';
import Footer from '../footer/footer';

function UserContainerHooks() {
  const [usersAll , setUsersAll]  = React.useState([]);
  const [storedUser,setStoredUser] = React.useState(JSON.parse(localStorage.getItem("Users")));
  useEffect(()=>{
    store.dispatch(fetchUsers());
    // console.log(JSON.parse(localStorage.getItem("Users")));
    
  },[])
  const {isLoading,users,error,searchField} = useSelector((state)=>state);

  useEffect(()=>{
   if(storedUser && Object.keys(storedUser).length !== 0)
   {
    var userBefore = users.filter(user=>user.id !== storedUser.id);
    console.log(userBefore);
    userBefore.push(storedUser);
    console.log(userBefore);
    setUsersAll(userBefore);
    setDelUsers(userBefore);
    
   }else{
    setUsersAll(users);
    setDelUsers(users);
   }
  },[users])
  // console.log(usersAll);
 
  // console.log(usersAll);
// console.log(usersAll);
//   console.log(users);
  
  // console.log(storedUser);
  const [delUsers,setDelUsers] = React.useState(usersAll);
  const filteredUsers = usersAll.filter(user=>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))
  var filteredDeletedUsers=[];
  
  const handleDelete = id =>{
    console.log(id);
   if(storedUser)
   {
    console.log('I am from loop');
    if(id === storedUser.id)
    {
      localStorage.setItem("Users",JSON.stringify({}));
    }
   }

    filteredDeletedUsers = usersAll.filter(user => user.id !== id);
   
    // console.log(users);

    setUsersAll(filteredDeletedUsers);
    setDelUsers(filteredDeletedUsers);
  }
  useEffect(()=> {
    setUsersAll(filteredUsers)
    if(searchField === "")
        {setUsersAll(delUsers); console.log(usersAll)}
  },[searchField])
  return (
    <div>
       { usersAll.length > 0 && (<>
        {
            isLoading ? <h1>Loading...</h1>
            : error ? <h3>{error}</h3>
            : <div>
                <UserList allUsers = {usersAll} onDel={handleDelete}/>
                
            </div>
        }
        <Footer/>
       </>)
      }

    </div>
  )
}

export default UserContainerHooks;