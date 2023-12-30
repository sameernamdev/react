import { useContext } from "react"
import { Content } from "../App"

export default function Takeinput()
{
    var{setA,setB}=useContext(Content)
    return(
        <>
        <p>Enter the first number <input type="text" onChange={(e)=>setA(e.target.value)}/></p>
        <p>Enter the second number <input type="text" onChange={(e)=>setB(e.target.value)}/></p>
        </>
    )
}