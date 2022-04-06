 import {Component} from 'react';

 class Counter extends Component{
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
        const {render} = this.props;
        const {counter} = this.state;
        return render(counter,this.handleClick)
    }
 }
 export default Counter;