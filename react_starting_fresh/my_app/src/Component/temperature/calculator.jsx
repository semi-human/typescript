import React,{Component} from "react";
import { BoilingPoint } from "./showResult";
import { TempInput } from "./tempInput";
import { converter,converToFarenheit,convertToCelsius } from "./converter";
class Calculator extends Component{
    constructor(props){
        super(props);
        
        this.state={
            temp:"",
            scale:""

        }
    }
    tempHandler=(e , scale)=>{
        this.setState({
            temp:e.target.value,
            scale,
        })
    }

    render(){
       const {temp,scale} = this.state;
       const celsius = scale === 'f' ? converter(temp,convertToCelsius) : temp;
       const farenheit = scale === 'c' ? converter(temp,converToFarenheit) : temp;
        return(
            <div>
                <TempInput scale="c" temperature={celsius} onTempChange={this.tempHandler}/>
                <TempInput scale="f" temperature={farenheit} onTempChange={this.tempHandler}/>
                <BoilingPoint celsius={parseFloat(temp)}/> 
            </div>
        )
    }
}

export default Calculator;