export default function Demo3()
{
    var a=0,b=0,c
    var first=(e)=>{console.log(a= parseInt(e.target.value))}
    var second=(e)=>{console.log(b=parseInt(e.target.value))}
    var Greatest=(e)=>
    {
        if(a>b)
        {
            console.log(a)
        }
        else
        {
          console.log(b)
        }
    }
    return(
        <>
        <p>Enter the first number <input type="text" onChange={first}></input></p>
        <p>Enter the second number <input type="text" onChange={second}></input></p>
        <p><button onClick={Greatest}>Greatest</button></p>
        </>
    )
}