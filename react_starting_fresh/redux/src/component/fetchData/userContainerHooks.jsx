import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  fetchUsers } from '../../store/actions/actions';
import { store } from '../../store';

import UserList from '../userList/userList';
import Footer from '../footer/footer';
let newUserList = [];
function UserContainerHooks() {
  const [usersAll , setUsersAll]  = React.useState([]);
  const [storedUser,setStoredUser] = React.useState(JSON.parse(localStorage.getItem("Users")));
  useEffect(()=>{
    store.dispatch(fetchUsers());
    // console.log(JSON.parse(localStorage.getItem("Users")));
    if(localStorage.getItem('newUsers') !== null)
    {
      newUserList = JSON.parse(localStorage.getItem('newUsers'));
    }
  },[])
  const {isLoading,users,error,searchField} = useSelector((state)=>state);
  console.log(newUserList);
  useEffect(()=>{
   if(storedUser && Object.keys(storedUser).length !== 0)
   {
    var userBefore = users.filter(user=>user.id !== storedUser.id);
    console.log(userBefore);
    userBefore.push(storedUser);
    if(Object.keys(newUserList).length > 0)
      {
        newUserList.forEach(user=>{
          if(storedUser.id !== user.id)
            userBefore.push(user);
            users.push(user);
        })
      }
    console.log(userBefore);
    setUsersAll(userBefore);
    setDelUsers(userBefore);
   
    
   }else{
    if(Object.keys(newUserList).length > 0)
      {
        newUserList.forEach(user=>{
          users.push(user);
        })
      } 
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
  const filteredUsers = users.filter(user=>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  console.log(filteredUsers)
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
    
    localStorage.setItem('newUsers', JSON.stringify(newUserList.filter(user => user.id !== id)));
    
    localStorage.setItem('id',id);
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
       </>)
      }

    </div>
  )
}

export default UserContainerHooks;