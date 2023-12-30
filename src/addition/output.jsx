import { useContext } from "react"
import { Content } from "../App"

export default function Output()
{
    var{c}=useContext(Content)
    return(
        <>
        <p>thier sum:{c}</p>
        </>
    )
}