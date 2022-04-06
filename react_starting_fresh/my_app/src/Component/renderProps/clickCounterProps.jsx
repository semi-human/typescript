export const ClickCounters = ({counter,handleClick})=>{
    return(
        <div>
            <button
                type="button"
                onClick={()=>handleClick(30)}
            >
                Clicked {counter} times
            </button>
        </div>
    )
}