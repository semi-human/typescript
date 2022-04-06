export const convertToCelsius = (farenheit)=>{
    return ((farenheit - 32) * 5) / 9;
}

export const converToFarenheit = (celsius) =>{
    return ((celsius * 9) / 5) + 32;
}

export const converter = (temp,convertTo)=>{
    const input = parseFloat(temp);

    if(Number.isNaN(input)){
        return ''
    }
    const output = convertTo(input);
    const rounded = output.toFixed(3);
    return rounded.toString();
}