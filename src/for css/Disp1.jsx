import { useContext } from "react"
import style from "./style.module.css"
import { Theme } from "../App"
export default function Disp1()
{
    var {dark,setDark}=useContext(Theme)

    var changeTheme=()=>{
        // setDark((item)=>!item)
        setDark(!dark)
    }

    
    return(
        <>
         <div className={style.container}>
            <div className={[style.badabox,dark?style.dark:style.light].join(' ')}>
             <div className={style.logo}>
               <h1>Company</h1>
             </div>
             <div className={style.boxcontainer}>
                <div className={style.box}>Home</div>
                <div className={style.box}>About</div>
                <div className={style.box}>Gallery
                
                </div>
                <div className={style.box}>Contact</div>
                <div className={style.box}>Others</div>
                <div className={style.box}
                    onClick={changeTheme}
                >{dark?"Light":"Dark"}</div>
             </div>
            </div>
         </div>
        </>
    )
}