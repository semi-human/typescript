import React,{useRef , useState , useEffect }from "react";
import { Link ,Navigate, useNavigate } from "react-router-dom";
import { faCheck , faTimes , faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


toast.configure();
const Signin = ({setAuth}) => {
  //useRef
  const userRef = useRef();
  const errRef = useRef();
  
  //user
  const [user,setUser]  = useState('');
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  //password
  const [pwd,setPwd] = useState('');
  const [validPwd,setValidPwd] = useState(false);
  const [pwdFocus,setPwdFocus] = useState(false);
  
  //error and success
  const [errMsg,setErrMsg] = useState('');
  const [success,setSuccess] = useState(false);
  
  const naivgate = useNavigate();
  //useEffects
  useEffect(()=>{
      userRef.current.focus();
  },[])

  //user useEffects

  useEffect(()=>{
      const result = USER_REGEX.test(user);
      console.log(user);
      console.log(result);
      setValidName(result);
  },[user])

  //password
  useEffect(()=>{
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
  },[pwd])

  //error
  useEffect(()=>{
      setErrMsg('');
  },[user,pwd])
  
  const getDataFromLocal = (data) =>{
      const userData = JSON.parse(localStorage.getItem('registeredUser'));
      let found = false;
      userData.some(user =>(
        user.user === data.user && user.pwd === data.pwd ? found = true : ''
      ))
      if(found)
      {
          setAuth(true);
          localStorage.setItem('Auth',JSON.stringify(true));
          toast.success('User login successful',{position:toast.POSITION.TOP_CENTER});
            setSuccess(true);
            localStorage.setItem('UserName',data.user[0].toUpperCase() + data.user.slice(1) );
            setTimeout(()=>{
                naivgate('/users');
            },2000)
      }else{
          toast.warning('Wrong Credentials!');
          userData.some(user=>{
              if(user.user !== data.user)
                setValidName(false)
              else if(user.pwd !== data.pwd)
                setValidPwd(false); 
            return '';      
          })
      }
  }
  const handleSubmit = e =>{
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if(!v1 || !v2)
      {
          setErrMsg("invalid entry");
          return;
      }
      console.log(user,pwd);
      
      getDataFromLocal({user:user,pwd:pwd})
  }
  return (
    <div className="container">
        {
            success ? (
              <section>
                   <h1>Loading...</h1>
              </section>
            ) :(
                <section>
            <p ref={errRef} className={errMsg ? 'err-msg' : 'off-screen'}>{errMsg}</p>
            <h1>Login</h1>

             <form onSubmit={handleSubmit}>
                 <label htmlFor="username">
                     UserName

                     <span className={validName ? 'valid' : 'hide' }>
                            <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validName || !user ? 'hide' : 'invalid'}>
                            <FontAwesomeIcon icon ={faTimes}/>
                    </span>
                 </label>
                 <input
                    type="text"
                    name="username"
                    id="username"
                    ref={userRef}
                    onChange={(e)=>setUser(e.target.value)}
                    autoComplete="off"
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="uidNote"
                    onFocus={(e)=>setUserFocus(true)}
                    onBlur={(e)=>setUserFocus(false)}
                 />

                 <p id="uidNote" className={userFocus && user && !validName ? 'instructions' : 'off-screen'}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                        4 to 24 characters<br/>
                        Must begin with a letter<br/>
                        Letters,numbers,underscore and hyphen allowed.
                 </p>

                   {/* password  */}
                 <label htmlFor="password">
                     Password
                     <span className={validPwd ? 'valid' : 'hide' }>
                            <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                            <FontAwesomeIcon icon ={faTimes}/>
                    </span>
                 </label>
                 <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby="pwdNote"
                    onFocus={(e)=>setPwdFocus(true)}
                    onBlur={(e)=>setPwdFocus(false)}
                 />

                 <p id="pwdNote" className={pwdFocus  && !validPwd ? 'instructions' : 'off-screen'}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    8 to 24 characters<br/>
                    Must include uppercase and lowercase letters,a number and a special character<br/>
                    Allowed special Characters:<span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span><span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>
                 </p>

                    <button disabled={!validName || !validPwd ? true : false}>Sign In</button>
             </form>
                <p>
                    Need an account?<br/>
                    <span className='line'>
                        <Link to="/signup">Signup</Link>
                    </span>
                </p>
            </section>
            )
        }
    </div>
  )
}

export default Signin;
