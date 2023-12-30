import style from "./product.module.css"
export default function Product(props)
{
    return(
        <>
        <div className={style.container}>
            <div className={style.box1}>
                <div className={style.menu}>
                <ion-icon name="heart-circle"></ion-icon> <br />
                <ion-icon name="grid"></ion-icon><br />
                <ion-icon name="bag-handle"></ion-icon><br />
                <h3>{props.title}</h3>
                <h2>{props.price}</h2>
                </div>
                   <img className={style.image} src={props.image}  alt="" />
                   <button className={style.btn}>Buy now <ion-icon name="bag-handle"></ion-icon></button>
            </div>
        </div>
        </>
    )
}