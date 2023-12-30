import { useContext } from "react"
import { Context } from "../App"

export default function Display()
{
    var{count}=useContext(Context)
    return(
        <>
        <h1>{count}</h1>
        
        </>
    )
}