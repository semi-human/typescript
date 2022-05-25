import React,{ useContext } from 'react'
import { AppContext } from './context';
const Key = ({keyVal , big , corrected}) => {
  const {onSelect , onEnter , onDelete} = useContext(AppContext);
  const selectedLetter = () =>{
        
        if(keyVal === "ENTER")
        {
            onEnter();
        }else if(keyVal.props){
            onDelete();
        }else{
          onSelect(keyVal);
        }
        
  }
  return (
    <div className={big ? `border  w-32 h-20 m-3 bg-slate-600 text-white rounded-sm flex items-center justify-center cursor-pointer` : corrected ? `border w-16 h-20 m-3 bg-green-500 text-white rounded-sm flex items-center justify-center cursor-pointer` :`border w-16 h-20 m-3 bg-slate-600 text-white rounded-sm flex items-center justify-center cursor-pointer`  } onClick={selectedLetter}>{keyVal}</div>
  )
}

export default Key