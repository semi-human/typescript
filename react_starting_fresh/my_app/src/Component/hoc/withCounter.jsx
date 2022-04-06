import React,{Component} from "react";

export const withCounter = (OriginalComponent)=>{
    class NewComp extends Component{
        constructor(props){
            super(props);
    
            this.state={
                counter:0
            }
    
            this.handleClick = this.handleClick.bind(this);
        }
    
        handleClick (av){
            console.log(av);
            this.setState(prevState=>({
                counter:prevState.counter + 1
            }))
        }

        render(){
            const {counter} = this.state;
            return <OriginalComponent 
                counter={counter}
                handleClick={this.handleClick} 
            />
        }
    
    }
    return NewComp;
}