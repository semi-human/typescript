import React,{ useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {

  const [user,setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
   console.log(from);  
  const handleLogin = () =>{
    auth.login(user);
    navigate(from, { replace: true });
  }
  return (
    <div>
        <label>
            username: <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
        
    </div>
  )
}

export default Login