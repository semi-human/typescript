import React from 'react'
type PersonProps ={
    user:{
        name:string,
        email:string
    }
}
export const Person = (props:PersonProps) => {
  return (
    <div>
        <h2 >{props.user.name}</h2>
        <p>{props.user.email}</p>
    </div>
  )
}
