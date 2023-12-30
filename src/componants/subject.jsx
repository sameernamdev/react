import { useState } from "react"

export default function Subject()
{
    var [a,setA]=useState(0)
    var [b,setB]=useState(0)
    var [c,setC]=useState(0)
    var [d,setD]=useState(0)
    var [e,setE]=useState(0)
    return(
        <>
        <p>Enter the marks of math <input type="text" onChange={(e)=>setA(parseInt(e.target.value))} /></p>
        <p>Enter the marks of english <input type="text" onChange={(e)=>setB(parseInt(e.target.value))} /></p>
        <p>Enter the marks of hindi <input type="text" onChange={(e)=>setC(parseInt(e.target.value))} /></p>
        <p>Enter the marks of toc <input type="text" onChange={(e)=>setD(parseInt(e.target.value))} /></p>
        <p>Enter the marks of Iwt <input type="text" onChange={(e)=>setE(parseInt(e.target.value))} /></p>
        <p></p>
        </>
    )
}