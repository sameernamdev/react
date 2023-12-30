import { useState } from "react"
import style from "./style.module.css"
export default function User()
{
    var [showPassword,setshowPassword]=useState(false)
    return(
        <>
        <div className={style.container}>
            <div className={style.box}>
               <h2>Google</h2><br />
               <h1>SAMEER NAMDEV</h1><br />
               <input type={(showPassword)?"text":"password"} />
               <p><input type="checkbox" onChange={()=>setshowPassword(!showPassword)} /> Show password</p><br />
                <div className={style.box2}>
                    <a href="">Forget Password</a>
                    <button>Next</button>
                </div>  
            </div>
        </div>
        </>
    )
}