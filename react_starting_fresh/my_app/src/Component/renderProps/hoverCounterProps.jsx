export const HoverCounters = ({counter,handleClick,theme})=>{
    const style= theme === "dark" ? 
    {backgroundColor:'black', color:'white'} : null
    return(
        <div>
            <button
                type="button"
                onMouseOver={()=>handleClick(35)}
                style={style}
            >
                Hovered {counter} times
            </button>
        </div>
    )
}