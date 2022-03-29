import React from 'react'
import {Person} from './person';
type PersonProps ={
    names:{
        name:string,
        id:number,
        email:string
    }[],
    loading:boolean
}
export const Persons = (props:PersonProps) => {
   console.log(props.loading)
  return (
    <div>
      
        {
            props.names.map(user=>(
                <Person key={user.id} user={user}/>
            ))
        }
        
       
    </div>
  )
}
