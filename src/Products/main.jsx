import { useState } from "react"
import Product from "./product"
import style from "./product.module.css"
import Data from "./productData" 
export default function Main()
{
        
    return(
        <>
        <div className={style.container1}>
        {Data.map((item,index)=> <Product key={index} title={item.title} image={item.image}/>)}
        

        </div>
        </>
    )

}