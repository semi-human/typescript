import React , {useState} from 'react';
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
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("Auth")));

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
