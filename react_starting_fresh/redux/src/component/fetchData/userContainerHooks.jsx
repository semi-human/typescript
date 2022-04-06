import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  fetchUsers } from '../../store/actions/actions';
import { store } from '../../store';

import UserList from '../userList/userList';
import Footer from '../footer/footer';

function UserContainerHooks() {
  const [check,setCheck] = React.useState(true);
  const [usersAll , setUsersAll]  = React.useState([]);
  const [storedUser,setStoredUser] = React.useState(JSON.parse(localStorage.getItem("Users")));
  useEffect(()=>{
    store.dispatch(fetchUsers());
    // console.log(JSON.parse(localStorage.getItem("Users")));
    
  },[])
  const {isLoading,users,error,searchField} = useSelector((state)=>state);

  useEffect(()=>{
   if(storedUser)
   {
    setUsersAll(users.filter(user=>user.id !== storedUser.id));
    setDelUsers(users.filter(user=>user.id !== storedUser.id));
    
   }else{
    setUsersAll(users);
    setDelUsers(users);
   }
  },[users])
  // console.log(usersAll);
  if(storedUser)
  {
    usersAll.map(user => {
      if(user.id === storedUser.id)
       return usersAll
      else if(user.id !== storedUser.id && check)
        {
          usersAll.push(storedUser);
          setCheck(false);
           if(check)
              console.log("Hello"); 
          console.log(usersAll);
          return usersAll
        }
      else{
        console.log("I am from");
        console.log(usersAll);
        return usersAll
      }
    })
  }
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