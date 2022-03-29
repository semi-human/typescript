import React from 'react'
type GreetProps ={
    name: string,
    age:number,
    isLoggedIn:boolean,
    country:string,
    numMsgs?:number
}
export const Greet = (props:GreetProps) => {
  const {numMsgs = 0} = props;
  return (
    props.isLoggedIn ?  <h2>greetings,Hooman! {props.name} {props.age} and country is {props.country}.
    You have {numMsgs} unread messages.</h2>
    : <h2>Welcome Guest!</h2>
   
  )
}