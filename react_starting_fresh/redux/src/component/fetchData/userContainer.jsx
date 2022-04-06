import {useEffect} from 'react';
import { fetchUsers } from '../../store/actions/actions';
import React from 'react'
import { connect } from 'react-redux'
function UserContainer({users,isLoading,error,fetchUsers}) {
    useEffect(()=>{
        // console.log("Hello")
        fetchUsers();
        // console.log(fetchUsers())
      },[])
  return (
        isLoading ? <h1>loading</h1> 
        : error ? <h1>{error}</h1> 
        : <div>
            <h1>Users List</h1>
            <div>{users && users.map(user=>(
                <h2 key={user.id}>{user.name}</h2>
            ))}
            </div>
        </div>
  )
}
const mapStateToProps = state =>{
    return{
        users:state.users,
        isLoading:state.isLoading,
        error: state.error
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserContainer);