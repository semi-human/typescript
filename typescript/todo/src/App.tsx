import React,{useState,useEffect} from 'react';
import './App.css';
// import { ITask } from './interface';
import { TodoTask } from './components/todoTask';
function App() {
  type tasks ={
    taskName : string,
    deadline:number,
  }
  const [task,setTask] = useState("");
  const [days,setDays] = useState(0);
  const [todo,setTodo] = useState<tasks[]>([]);

  useEffect(()=>{
      setTask("");
      setDays(0);
  },[])
  
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.type === 'text')
        setTask(e.target.value);
      else if(e.target.type === 'number')
        setDays(Number(e.target.value))
  }

  const handleSubmit = () =>{
    const newTask={
      taskName:task,
      deadline : days,
    }
    
    newTask.taskName === "" || newTask.deadline === 0 ? alert("Enter a valid todo for gods sake") :(
        todo.length === 0 ? setTodo([...todo,newTask]) : (
          todo.map(tasks =>(
            tasks.taskName ===  newTask.taskName  && tasks.deadline === newTask.deadline ?  alert('Are you this stupid? You already have this task in the list') : setTodo([...todo,newTask])
          ))
        )
      )
    console.log(todo);
  }
  return (
    <div className="App">
      <div className="header">
         <div className="input-container">
          <input
                type="text"
                value={task}
                placeholder='Task...'
                onChange={handleChange}
            />
            <input
                type="number"
                min="0"
                value={days}
                placeholder="Deadline(..in days)"
                onChange={handleChange}
            />
         </div>
          <button type="button" onClick={handleSubmit}>Add Button</button>
      </div>
      <div className="todoList">
          {todo.map((task : tasks ,index : number) =>(
            <TodoTask key={index} todos = {task}/>
          ))}
      </div>
    </div>
  );
}

export default App;
