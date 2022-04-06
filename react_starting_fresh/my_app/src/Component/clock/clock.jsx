import React,{Component} from "react";
import Button from "../button/button";
class Clock extends Component{
    constructor(props){
        super(props);

        this.state ={
            date:new Date(),
            locale:"bn-BD"
        }

    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                date: new Date() 
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    handleChange=(lang)=>{
        this.setState({
            locale: lang
        })
    }
    render(){
        const {date,locale} = this.state;
        return(
            <div>
                <h1 className="display">
                    Hello from {this.props.children} {date.toLocaleTimeString(locale)}<br/>
                    {locale === "bn-BD" ? <Button clickedState={this.handleChange} locale="en-US">Change clock to english mode</Button>
                    : <Button clickedState={this.handleChange} locale="bn-BD">Change clock to bangla mode</Button>}
                   
                </h1>
            </div>
        )
    }
}

export default Clock;