import React from 'react'
type HeadingProps = {
    children:string,
}
export const HeadingChild = (props:HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}
