import style from "./style.module.css"
import { useState } from "react"

export default function Fruits()
{
    var[fruits,setfruits]=useState([])
    var[item,setitem]=useState("")
    var[error,seterror]=useState("")
    var[search,setsearch]=useState("")
    var addFruits=()=>{
        if(item.length>3)
        {
        var temp=[...fruits]
        temp.push(item)
        setfruits(temp)
        }
        else{
            if(item.length==0)
            {
            seterror("enter fruit name first")
            }
            else{
            seterror("fruit name must be in 4 characters")
            }
        }
    }
    var sortfruit=()=>{
        var temp=[...fruits.sort()]
        setfruits(temp)
    }
    var removeall=()=>{
        setfruits([])
        seterror(" ")
        setitem(" ")
    }
    var errorstyle={
        "color":"red",
        "fontSize":"30",
    }
    var removeitem1=(index)=>{
        var ans= window.confirm("are you sure?")
        if(ans)
        {
        var temp=[...fruits]
        temp.splice(index,1)
        setfruits(temp)
        }
    }
    var removeitem2=(index)=>{
        var x=window.prompt("Type Delete to remove element as confirmation")
        if(x==="Delete")
        {
            var temp=[...fruits]
            temp.splice(index,1)
            setfruits(temp)
        }
    }
    var removeitem3=(index)=>{
        var x=window.prompt("Type fruit name you want to remove ")
        if(x===item)
        {
            var temp=[...fruits]
            temp.splice(index,1)
            setfruits(temp) 
        }
    }
    return(
        <>
        <div className={style.container}>
        <p>Enter fruits name <input type="text" value={item} onChange={(e)=>setitem(e.target.value)} /> <span style={errorstyle}>{error}</span></p>
        <p><button onClick={addFruits}>Add fruits</button> <br />
        <button onClick={removeall}>remove ALL</button></p>
        <button onClick={sortfruit}>sort</button>
        <hr />
        <p><input type="text" placeholder="search..." value={search} onChange={(e)=>setsearch(e.target.value)}/></p>

        <h1>Fruits</h1>
        {
            (fruits.length>0)?
            <ul style={{"listStyle":"none"}}>
                { fruits.filter((x)=>(search=="")?x:x.includes(search)).map((item,index)=><li key={index}>{item}
                  <button onClick={()=>removeitem1(item)}>Delete1</button>
                  <button onClick={()=>removeitem2(item)}>Delete2</button>
                  <button onClick={()=>removeitem3(item)}>Delete3</button>
                </li>)}
            </ul>
            :
            <h4>fruits are not added </h4>
        }
        </div>
        </>
    )
}