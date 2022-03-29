import React from 'react'
type InputProps = {
    value:string,
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value,handleChange}:InputProps) => {
  return (
    <div>
        <input type="text" value={value} 
        onChange={handleChange}/>
    </div>
  )
}
