import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../header/header.css';
import './modalSingle.css';
export const ModalSingleUser = () => {
  const [user,setUser]  = useState({});
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
    

  useEffect(()=>{
     const user = JSON.parse(localStorage.getItem('Users'));

     if(user !== null && Object.keys(user).length !== 0 && user.id === Number(id))
     {
        setUser(user);
        setLoading(false);
     }else{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            setUser(response.data)
        })
        .finally(()=>setLoading(false))
     }
  },[id]);
  return (
    <div className="container">
        <h1>Full Details of User {id}</h1>
        {
            loading ? (<h2>Loading...</h2>)
            :(
                <div className="user-full">
                   <div className="user-final">
                    <div className="user-general">
                        <h4>{user.name}</h4>
                        <strong>Username:</strong>
                        <span>{user.username}</span><br/>
                        <strong>Email:</strong>
                        <span>{user.email}</span><br/><br/>
                    </div>
                    <div className="user-address">
                        <strong>Address Details:</strong><br/>
                        <strong>Street:</strong>
                        <span>{user.address.street}</span><br/>
                        <strong>Suite:</strong>
                        <span>{user.address.suite}</span><br/>
                        <strong>City:</strong>
                        <span>{user.address.city}</span><br/>
                        <strong>Zipcode:</strong>
                        <span>{user.address.zipcode}</span><br/>
                    </div>
                    <div className="extra">
                        <strong>Phone:</strong>
                        <span>{user.phone}</span><br/>
                        <strong>Website:</strong>
                        <span>{user.website}</span><br/><br/>
                    </div>
                    <div className="company">
    
                        <strong>Company Details</strong><br/>
                        <strong>Name:</strong>
                        <span>{user.company.name}</span><br/>
                        <strong>Catch Phrase:</strong>
                        <span>{user.company.catchPhrase}</span><br/>
                        <strong>BS:</strong>
                        <span>{user.company.bs}</span><br/><br/>
                    </div>
                    <div className="img-final">
                   <img src={`https://robohash.org/${user.id}?set=set5&size=180x180`} alt="monsters"/>
                   </div>
                   </div>

                  
                </div>
            )
        }
    </div>
  )
}
