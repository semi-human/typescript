import React , {useState, useEffect} from 'react';
import './App.css';
import { Route, Routes  } from 'react-router-dom';
// import UserContainer from './component/fetchData/userContainer';
import UserContainerHooks from './component/fetchData/userContainerHooks';
import { ModalSingleUser } from './component/userSingle/modalSingleUser';
import { UpdateUser } from './component/update/updateUser';
import AddUser from './component/add/addUser';
import { Homepage } from './component/homepage/homepage';
import Signup from './component/signup/signup';
import Signin from './component/signin/signin';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
toast.configure();
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("Auth")));

  const navigate = useNavigate();
  
  const checkValidity = () =>{
    const userName = localStorage.getItem("UserName");
    console.log(userName);
    const userData = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(userData);
    if(userData !== null)
    {
      let futureTime = new Date();
      let futureTimeStr = futureTime.toString();
      let futureTimeMsecs = Date.parse(futureTimeStr);
      console.log(futureTimeMsecs);
      console.log('Hello from time');
      
      userData.some(user=>{
        if(user.user === userName && (futureTimeMsecs - user.time) <= (300 * 1000))
        {
          console.log('Hellos') 
          setAuth(true);
           localStorage.setItem('Auth',JSON.stringify(true));
           localStorage.setItem('Expired',JSON.stringify(false));
        }else{
          console.log('Good bye')
          if((futureTimeMsecs - user.time) > (600 * 1000))
          {
              toast.error("Session expired! Please login again.",{position:toast.POSITION.TOP_CENTER});
              setAuth(false);
              localStorage.setItem('Auth',JSON.stringify(false));
              localStorage.setItem('Expired',JSON.stringify(true));
             setTimeout(()=>{
                navigate('signin');
             },2000)
              
              
          }
        }
        return '';
      })
    }
  }
  useEffect(()=>{
      setTimeout(()=>{
        if(isAuthenticated)
        {
          checkValidity();
        }
      },1000)
  },[])
  const setAuth = (value) =>{
    setIsAuthenticated(value)
  }
  return (
    <div className="App">
      <Header  isAuthenticated={isAuthenticated} setAuth = {setAuth}/>
      <Routes>
          <Route path='/' element ={<Homepage isAuthenticated={isAuthenticated}/>}/> 
          {isAuthenticated ? <Route path="/users" element={<UserContainerHooks/>}/> :<Route path='/' element ={<Homepage/>}/>}
          <Route path='users/:id' element ={<ModalSingleUser/>}/>
          <Route path="users/update/:id" element={<UpdateUser/>}/>
          <Route path="users/add" element={<AddUser/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='signin' element={<Signin setAuth={setAuth}/>} />
        </Routes>
     {/* <UserContainerHooks/> */}
     <Footer/>
    </div>
  );
}

export default App;
