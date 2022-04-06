import React,{Component} from 'react';
import './App.css';
import Clock from './Component/clock/clock';
import Form from './Component/form/form.component';
import Calculator from './Component/temperature/calculator';
import ClickCounter from './Component/hoc/clickCounter';
import HoverCounter from './Component/hoc/hoverCounter';
import Counter from './Component/renderProps/counterProps';
import { ClickCounters } from './Component/renderProps/clickCounterProps';
import { Section } from './Component/context/section';
class App extends Component {
  state={
    theme:"dark"
  }
  render(){
    const {theme} = this.state;
    return (
      <div className="App">
        <Clock>I am children</Clock>
        <Form/>
        <Calculator/>
        <ClickCounter/>
        <HoverCounter/>
        <Counter render={(counter,handleClick)=>(
          <ClickCounters counter={counter} handleClick={handleClick}/>
        )}/>
         <Section theme={theme}/>
      </div>
    );
  }
}

export default App;
