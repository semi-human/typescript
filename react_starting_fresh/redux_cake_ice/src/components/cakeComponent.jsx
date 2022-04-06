import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function CakeComponent() {
  const numCakes = useSelector((state)=>state.cake.numCakes);
  const  numIces = useSelector((state)=>state.ice.numIces);
  const dispatch = useDispatch();  

  const handleClick = ()=>{
      dispatch({type:"BUY_CAKE"});
  }
  return (
    <div>
        {numCakes >= 0 ? <h1>Number of Cakes:{numCakes}</h1> 
        : <h1>Sorry out of cakes!</h1>}
        <button type="button" onClick={handleClick}>buy Cake</button>

        {numIces >= 0 ? <h1>Number of Ices:{numIces}</h1> 
        : <h1>Sorry out of ices!</h1>}
        <button type="button" onClick={()=>{dispatch({type:"BUY_ICE"})}}>buy Ices</button>
    </div>
  )
}

export default CakeComponent;