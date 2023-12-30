import { useContext } from "react"
import { Context } from "../App"

export default function Update()
{
    var {count,setCount}=useContext(Context)
    var decrement= ()=>{setCount(count-1)}
    var increment= ()=>{setCount(count+1)}
    return(
        <>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        </>
    )
}