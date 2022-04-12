import React,{useRef , useState , useEffect }from "react";
import { Link , Navigate } from "react-router-dom";
import { faCheck , faTimes , faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


toast.configure();
const Signup = () => {
  //useRef
  const userRef = useRef();
  const errRef = useRef();
  
  //user
  const [user,setUser]  = useState('');
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);
  
  //email
  const [email,setEmail] = useState('');
  const [validEmail,setValidEmail] = useState(false);
  const [emailFocus,setEmailFocus] = useState(false);

  //password
  const [pwd,setPwd] = useState('');
  const [validPwd,setValidPwd] = useState(false);
  const [pwdFocus,setPwdFocus] = useState(false);
  
  //confirm password
  const [matchPwd,setMatchPwd] = useState('');
  const [validMatchPwd,setValidMatchPwd] = useState(false);
  const [matchPwdFocus,setMatchPwdFocus] = useState(false);

  //error and success
  const [errMsg,setErrMsg] = useState('');
  const [success,setSuccess] = useState(false);

  //redirecting to another page
  const [isDisplay , setIsDisplay] = useState(false);

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

  //email
  useEffect(()=>{
      const result = EMAIL_REGEX.test(email);
      console.log(email);
      console.log(result);
      setValidEmail(result);
  },[email])

  //password
  useEffect(()=>{
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
      const match = pwd === matchPwd;
      setValidMatchPwd(match);
  },[pwd,matchPwd])

  //error
  useEffect(()=>{
      setErrMsg('');
  },[user,email,pwd,matchPwd])
  
  const saveDataToLocal = (data) =>{
      let oldData = localStorage.getItem('registeredUser');
      console.log(oldData);
      if(oldData === null)
      {
          let oldData = [];
          oldData.push(data);
          localStorage.setItem('registeredUser',JSON.stringify(oldData));
          localStorage.setItem('Auth',JSON.stringify(false));
          setTimeout(()=>{
            setSuccess(true);
            setUser('');  
            setEmail('');
            setPwd('');
            setMatchPwd('');
        },4000)
          toast.success('Registereds Successfully!',{position:toast.POSITION.TOP_CENTER});
      }else{
          console.log('Hello from arr');
        let oldArr = JSON.parse(localStorage.getItem('registeredUser'));
        let found = false;
        oldArr.some(user=>(
            user.email === data.email ? found = true : ''  
        ))
        console.log(found);
        if(found)
        {
            setIsDisplay(false);
            setValidEmail(false);
            toast.warning('User already exists!',{position:toast.POSITION.TOP_CENTER});
        }else{
            oldArr.push(data);
            console.log('Hello from arr');
            localStorage.setItem('registeredUser',JSON.stringify(oldArr));
            localStorage.setItem('Auth',JSON.stringify(false));
            setTimeout(()=>{
                setSuccess(true);
                setUser('');  
                setEmail('');
                setPwd('');
                setMatchPwd('');
            },4000)
            toast.success('Registered Successfully!',{position:toast.POSITION.TOP_CENTER});
        }
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
      console.log(user,email,pwd);
      setIsDisplay(true);
      saveDataToLocal({user:user , email:email,pwd:pwd})

      
  }
  return (
    <div className="container">
        {isDisplay && <h1>Loading...</h1>}
        {
            success ? (      
                <section>
                    <Navigate replace to="/signin"/>)                
                </section>
            ) :(
                <section>
            <p ref={errRef} className={errMsg ? 'err-msg' : 'off-screen'}>{errMsg}</p>
            <h1>Register</h1>

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

                {/* email input */}
                <label htmlFor="email">
                     Email

                     <span className={validEmail ? 'valid' : 'hide' }>
                            <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validEmail || !email ? 'hide' : 'invalid'}>
                            <FontAwesomeIcon icon ={faTimes}/>
                    </span>
                 </label>
                 <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete="off"
                    required
                    aria-invalid={validEmail ? 'false' : 'true'}
                    aria-describedby="emailNote"
                    onFocus={(e)=>setEmailFocus(true)}
                    onBlur={(e)=>setEmailFocus(false)}
                 />

                 <p id="emailNote" className={emailFocus && email && !validEmail ? 'instructions' : 'off-screen'}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                        Must contain characters and alphanumeric<br/>
                        Must begin with a letter or number<br/>
                        Must end with a dot extension<br/>
                        Allowed special Characters:<span aria-label='at symbol'>@</span><span aria-label="hyphen">-</span><span aria-label="dot">.</span>
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

                {/* Confirm Password */}
                <label htmlFor="confirmPassword">
                        Confirm Password

                        <span className={validMatchPwd && matchPwd ? 'valid' : 'hide'}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validMatchPwd || !matchPwd ? 'hide' : 'invalid'}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e)=> setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatchPwd ? 'false' : 'true'}
                            aria-describedby = 'confirmPwdNote'
                            onFocus={(e)=>setMatchPwdFocus(true)}
                            onBlur={(e)=>setMatchPwdFocus(false)}
                        />
                    <p id="confirmPwdNote" className={matchPwdFocus && !validMatchPwd ? 'instructions' : 'off-screen'}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Must be the same length and contain same characters of the password

                    </p>
                    <button disabled={!validName || !validPwd || !validMatchPwd ? true : false}>Sign Up</button>
             </form>
                <p>
                    Already Registered?<br/>
                    <span className='line'>
                        <Link to="/signin">
                            Signin
                        </Link>
                    </span>
                </p>
            </section>
            )
        }
    </div>
  )
}

export default Signup;
