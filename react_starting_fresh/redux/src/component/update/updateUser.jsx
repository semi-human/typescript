import React,{ useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './updateUser.css';
import { useNavigate } from "react-router-dom";


toast.configure();
export const UpdateUser = () => {
  const [user,setUser]  = useState({});
  const [loading,setLoading] = useState(true);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [company,setCompany] = useState("");
  const [catchPhrase,setCatchPhrase] = useState("");
  const [bs,setBs] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  
  let user_details = JSON.parse(localStorage.getItem('Users'));
  let newUser = JSON.parse(localStorage.getItem('newUsers'));
  useEffect(()=>{
    
    
     if(user_details !== null && Object.keys(user_details).length !== 0 &&  user_details.id === Number(id))
     {
        console.log(user_details.company);
        setUser(user_details)
        setUsername(user_details.username);
        setEmail(user_details.email);
        setPhone(user_details.phone);
        setCompany(user_details.company.name);
        setCatchPhrase(user_details.company.catchPhrase);
        setBs(user_details.company.bs);
        setLoading(false);
     }else{
       if(Number(id) > 10)
       {
          newUser.forEach(user=>{
            if(user.id === Number(id))
            {
              setUser(user)
              setUsername(user.username);
              setEmail(user.email);
              setPhone(user.phone);
              setCompany(user.company.name);
              setCatchPhrase(user.company.catchPhrase);
              setBs(user.company.bs);
              setLoading(false);
            }
          })
       }else{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            console.log(response.data.phone);
            setUser(response.data)
            setUsername(response.data.username);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setCompany(response.data.company.name);
            setCatchPhrase(response.data.company.catchPhrase);
            setBs(response.data.company.bs);
        })
        .finally(()=>setLoading(false))
       }
      
     }
      
      
},[id]);
//  let usera = user.username;
//  usera = 'rahim'
//  console.log(usera);
// console.log(user);
console.log(username);
console.log(email);
console.log(phone);
console.log(company);

const handleChange = (e) =>{
  if(e.target.name === "username")
    setUsername(e.target.value);
  else if(e.target.name === "email")
    setEmail(e.target.value);
  else if(e.target.name === "phone")
    setPhone(e.target.value);
  else if(e.target.name === "company")
    setCompany(e.target.value);
  else if(e.target.name === "catch")
    setCatchPhrase(e.target.value);
  else if(e.target.name === "bs")
    setBs(e.target.value);
}

const handleSubmit =(e) =>{
  e.preventDefault();
  user.username = username;
  user.email = email;
  user.phone = phone;
  user.company.name = company;
  user.company.catchPhrase = catchPhrase;
  user.company.bs = bs;
  console.log(user);
  if(username && email && phone && company && catchPhrase && bs)
  {
    if(Number(id) > 10)
    {
      localStorage.setItem("Users", JSON.stringify(user));
      toast.success('Successfully  Updated!',{position:toast.POSITION.TOP_CENTER  , autoClose:false})
      setTimeout(()=>{
        navigate('/users');
      },2000)
    }else{
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      localStorage.setItem("Users", JSON.stringify(user));
      toast.success('Successfully  Updated!',{position:toast.POSITION.TOP_CENTER  , autoClose:false})
      setTimeout(()=>{
        navigate('/users');
      },2000)
    }
  }else{
    toast.warn('Please fill up the fields to update',{position:toast.POSITION.TOP_CENTER});
    
  }
}
  return (
    <div className="container">
      
        <h1>Details of User {id}</h1>
        {
            loading ? (<h2>Loading...</h2>)
            :(
                <form className="user-full" onSubmit={handleSubmit}>
                   <div className="user-finals">
                    <div className="user-generals">
                        <div className="headers">
                          <h4>Basic Information</h4>
                        </div>
                       <div className="info">
                          <strong>Name</strong>
                         
                          <p><input type="text" value={user.name} id="name" name="name" readOnly/></p>
                          <strong>Username</strong>
                          <p><input type="text" value={username} name="username" onChange={handleChange}/></p>
                          <strong>Email</strong>
                          <p><input type="email" value={email} name="email" onChange={handleChange}/></p>
                       </div>
                       
                    </div>
                    <hr/>
                    <div className="user-generals">
                        <div className="headers">
                          <h4>Info Details</h4>
                        </div>
                       <div className="info">
                          <strong>Phone</strong>
                          <p><input type="text" value={phone} name="phone" onChange={handleChange}/></p>
                          <strong>Website</strong>
                          <p><input type="text" value={user.website} id="website" name="website" readOnly/></p>
                       </div>
                       
                    </div>
                    <hr/>

                    <div className="user-generals">
                        <div className="headers">
                          <h4>Company Details</h4>
                        </div>
                       <div className="info">
                          <strong>Company Name</strong>
                          <p><input type="text" value={company} name="company" onChange={handleChange}/></p>
                          <strong>Work Type</strong>
                          <p><input type="text" value={catchPhrase} name="catch" onChange={handleChange}/></p>
                          <strong>Perks</strong>
                          <p><input type="text" value={bs} name="bs" onChange={handleChange}/></p>
                       </div>
                       
                    </div>
                    
                    
                   <input className="submit" type="submit" value="Submit Form"/>
                   </div>
                </form>
            )
        }
    </div>
  )
}
