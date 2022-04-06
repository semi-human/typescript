import React,{Component} from "react";

class Button extends Component{
    render(){
        const {clickedState,locale} = this.props;
        return(
            <div>
                <button type="button" onClick={()=>clickedState(locale)}>{this.props.children}</button>
            </div>
        )
    }
}
export default Button;