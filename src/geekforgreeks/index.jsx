import { useState } from "react"
import style from "./style.module.css"
export default function NavBar()
{
    var[show,setshow]=useState(false)
    return(
        <>
        <div className={style.container}>
            <div className={style.box1 }>
                <h1>GeeksforGeeks</h1>
               <div className={[style.icon,show?style.rotate:" "].join(' ')} onClick={()=> setshow(!show)}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
               </div>
            </div>
            <div className={[style.box2,show?style.visible:""].join(' ')}>
                <ul>
                    <li>Language</li>
                    <li>Practice</li>
                    <li>Interview</li>
                    <li>Puzzle</li>
                </ul>
            </div>
        </div>
        </>
    )
}