import React from 'react'
type OScarProps ={
    children: React.ReactNode,
}
export const Oscar = (props:OScarProps) => {
  return (
    <div>{props.children}</div>
  )
}
