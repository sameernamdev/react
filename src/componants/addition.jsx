import React,{useState} from "react"
export default function Addition()
{
    var[a,setA]=useState("")
    var[b,setB]=useState("")
    var[c,setC]=useState("")
    var add=(e)=>{
        setC(parseInt(a)+parseInt(b))
    } 
    return(
     <>
       <p>Enter the first number <input type="text" onChange={(e)=>setA(e.target.value)} /></p>
       <p>Enter the second number <input type="text" onChange={(e)=>setB(e.target.value)} /> </p>
       <p><button onClick={add}>Addition</button></p>
       <p>Thier sum {c}</p>
     </>
    )
}