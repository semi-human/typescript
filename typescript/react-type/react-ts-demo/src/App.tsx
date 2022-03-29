import './App.css';
import { Greet } from './components/greet';
import { Persons } from './components/persons';
import {useEffect,useState} from 'react';
import { Status } from './components/status';
import { HeadingChild } from './components/HeadingChild';
import { Oscar } from './components/OScar';
import { Button } from './components/button';
import { Input } from './components/input';
import { Container } from './components/container';
import { Loggedin } from './components/state/loggedIn';
function App() {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{
      setIsLoading(false);
      setUsers(data);
     
    })
  },[])
 
  console.log(users);

  // const nameList=[
  //   {
  //     first:'a',
  //     last:'b',
  //   },
  //   {
  //     first:'c',
  //     last:'d',
  //   },
  //   {
  //     first:'e',
  //     last:'f',  
  //   }
  // ]
  return (
    <div className="App">
      <Greet name='Karim' age={23} isLoggedIn={true} country='Canada'
        numMsgs = {20}
      />
      {isLoading ?  <h2>Loading...</h2> : <Persons names = {users} loading={isLoading}/>}
      <Status status="error"/>
      <HeadingChild>PlaceHolder Text</HeadingChild>
      <Oscar>
        <HeadingChild>Hello from OScar</HeadingChild>
      </Oscar>
      <Button handleClick={(event,id) => {
        console.log("Clicked",event,id);
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container styles={{border:'1px solid black' , padding:'1rem',backgroundColor:'grey'}}/>
      <Loggedin/>
    </div>
  );
}

export default App;
