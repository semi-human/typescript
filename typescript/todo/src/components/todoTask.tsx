import React from 'react'

type TodoProps = {
    todos:{
        taskName:string,
        deadline:number,
    }
    key:number
}
export const TodoTask = ({todos}: TodoProps) => {
  return (
    <div>
        {todos.taskName}
    </div>
  )
}
