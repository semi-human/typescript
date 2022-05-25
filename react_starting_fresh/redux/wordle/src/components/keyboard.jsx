import React , {useEffect , useCallback , useContext , useState} from 'react'
import Key from './Key';
import { BiWindowClose } from "react-icons/bi";
import { AppContext } from './context';
const Keyboard = ({correct}) => {
  const keys1 = ['Q','W','E','R','T','Y','U','I','O','P'];
  const keys2 = ['A','S','D','F','G','H','J','K','L'];
  const keys3 = ['Z','X','C','V','B','N','M'];

  const {onSelect , onDelete , onEnter } = useContext(AppContext);
  const  [called,setCalled] = useState(false);
  const keyPressedHandle = useCallback((event)=>{
    console.log(event.key);
    console.log(typeof(event.key));
    if(event.key === "Enter")
    {
      console.log('hello from enter');
      setCalled(true);
      onEnter();
      
      
    }else if(event.key === "Backspace")
    {
      console.log("Hello from delete");
      onDelete();
    }else{
      if(event.key.charCodeAt(0) > 96 && event.key.charCodeAt(0) < 123)
      {
        console.log("Hello from sleect");
        onSelect(event.key.toUpperCase());
      }
    }
  },[onEnter , onDelete , onSelect ]);
  useEffect(()=>{
    document.addEventListener("keydown",keyPressedHandle);

    return ()=>{
      document.removeEventListener("keydown", keyPressedHandle);
    }
  },[keyPressedHandle])
  console.log(correct)
  return (
    <div className='flex flex-col justify-center items-center' onKeyDown={keyPressedHandle}>
      <div className="flex flex-row">
        {
          keys1.map(key=>(
                correct.includes(key) ? alert('Hello') : <Key key={key.charCodeAt(0)} keyVal={key}/>
          ))
        }
      </div>
      <div className="flex flex-row">
        {
          keys2.map(key=>(
            <Key key={key.charCodeAt(0)}keyVal={key}/>
          ))
        }
      </div>
      <div className="flex flex-row">
        <Key keyVal={'ENTER'} big/>
        {
          keys3.map(key=>(
            <Key key={key.charCodeAt(0)} keyVal={key}/>
          ))
        }
        <Key keyVal={<BiWindowClose size='1.5rem'/>} big/>
      </div>
    </div>
  )
}

export default Keyboard