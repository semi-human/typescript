import Counter from "../renderProps/counterProps";
import { HoverCounters } from "../renderProps/hoverCounterProps";
 export const Content = ({theme}) =>{
     return(
         <div>
             <Counter render={(counter,handleClick)=>(
                 <HoverCounters counter={counter} handleClick={handleClick} theme={theme}/>
             )}/>
         </div>
     )
 }