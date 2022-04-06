import React from "react";

const scaleNames = {
    c:"celsius",
    f:"farenheit"
}
export const TempInput= ({temperature,scale,onTempChange}) =>{
    return(
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input type="text" value={temperature} placeholder="0" onChange={(e)=>onTempChange(e,scale)}/>
                </fieldset>
                
            </div>
     )
    
}
