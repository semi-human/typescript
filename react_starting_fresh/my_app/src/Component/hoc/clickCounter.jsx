import React,{Component} from "react";
import { withCounter } from "./withCounter";
class ClickCounter extends Component{
    render(){
        const {counter,handleClick} = this.props;
        return(
            <div>
                <button
                    type="button"
                    onClick={()=>handleClick(30)}
                >
                    Clicked {counter} times
                </button>
            </div>
        )
    }
}
export default withCounter(ClickCounter);