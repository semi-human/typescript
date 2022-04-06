import './App.css';
import React,{Component} from 'react';
import Products from './component/product/product';

class App extends Component{
  state={
    users:[
      {id:1,name:"rahim"},
      {id:2,name:"karim"},
      {id:3,name:"Sohel"}
    ]
  }

  render(){
    return(
      <div>
        <Products data ={this.state.users}/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
    )
  }
}

export default App;

