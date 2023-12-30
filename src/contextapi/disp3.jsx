import { useContext } from "react"
import { Sameer } from "../App"

export default function Disp3()
{
    var {data,date}=useContext(Sameer)
    return(
        <>
        <h1>Im in disp3: {data} {date}</h1>

        </>
    )
}