import React,{Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            about:'',
            gender:'Male',
            isCSE: true,
            isSubmitted:false
        }
    }
    handleSubmit=(e)=>{

        e.preventDefault();
        this.setState({isSubmitted:true})
    }
    
    handleChange=(e)=>{
       if(e.target.type === "text"){
           this.setState({
               name:e.target.value
           })
       }else if(e.target.type === "textarea")
       {
        console.log(e.target.type)   
        this.setState({
            about: e.target.value
           })
       }else if(e.target.type === "select-one"){
           console.log(e.target.type);
           this.setState({
               gender:e.target.value
           })
       }else if(e.target.type === "checkbox"){
        console.log(e.target.type);
        this.setState({
            isCSE:e.target.checked
        })
    }else{
        console.log("You have other issues");
    }
    }
    render(){
        const {name,about,gender,isCSE,isSubmitted} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* type text */}
                    <label>
                        Name: <input type="text" value={name} onChange={this.handleChange} placeholder="John Doe"/>
                    </label>
                    <br/><br/>
                    <label>
                        About you: <textarea value={about} onChange={this.handleChange} placeholder="Lorem ipsum..."/>
                    </label>
                    <br/><br/>
                    <label>
                        Gender: <select value={gender} onChange={this.handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <br/><br/>
                    <label>
                        <input type="checkbox" checked={isCSE} onChange={this.handleChange} /> CSE background
                    </label><br/><br/>
                    <input type="submit" value="submit"/>
                </form>
                {
                    isSubmitted && (
                       <div>
                            <h1>Things we got form you are</h1>
                            <h3>Your Name: </h3><span>{name}</span>
                            <h3>About you: </h3><span>{about}</span>
                            <h3>You are a </h3><span>{gender}</span>
                            {isCSE ? <h3>You are from CSE background  </h3> : 
                                    <h3>You are not form CSE background.</h3>}
                       </div>
                    )
                }
            </div>
        )
    }
}
export default Form;