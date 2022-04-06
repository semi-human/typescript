export const BoilingPoint =({celsius = 0})=>{
    if(celsius >= 100){
        return <p>Water is boiling.</p>
    }
    return<p>Water is not boiling.</p>
}