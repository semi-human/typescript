import React,{Component} from "react";
import { withCounter } from "./withCounter";
class HoverCounter extends Component{
    
    render(){
        const {counter,handleClick} = this.props;
        return(
            <div>
                <button
                    type="button"
                    onMouseOver={handleClick}
                >
                    Hovered {counter} times
                </button>
            </div>
        )
    }
}
export default withCounter(HoverCounter) ;