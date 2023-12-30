import { useState } from "react"
import style from "./style.module.css"
export default function Box()
{
    var [show,setshow]=useState(true)
    return(
        <>
        <div className="container">
            <p><button onClick={()=>setshow(!show)}>Click me</button></p>
            <div className={[style.box,(show)?style.show:""].join(' ')}>
              
            </div>
        </div>
        </>
    )
}