import React,{useState} from "react";
export default function Show()
{
    var [a,setA]=useState(0)
    var [b,setB]=useState(0)
    var [c,setC]=useState(0)
    var show=(e)=>{
        if(a>b)
        {
            setC("profit")
        }
        else{
            setC("loss")
        }
    }
    
    return(
        <>
        <p>Enter the selling price <input type="text" onChange={(e)=>setA(e.target.value)} /></p>
        <p>Enter the cost price <input type="text" onChange={(e)=>setB(e.target.value)} /></p>
        <p><button onClick={show}>show</button></p>
        <p>profit/loss {c}</p>
        
        </>
    )
}