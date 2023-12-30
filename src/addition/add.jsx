import { useContext } from "react"
import { Content } from "../App"

export default function Add()
{
    var{setC,a,b}=useContext(Content)
    return(
        <>
        <button onClick={()=>setC(parseInt(a)+parseInt(b))}>Addition</button>
        </>
    )
}