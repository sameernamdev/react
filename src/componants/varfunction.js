export default function Demo2()
{
    var a=0,b=0,c;
    var first=(e)=>{console.log(a=e.target.value)}
    var second=(e)=>{console.log(b=e.target.value)}
    var Add=(e)=>{console.log(parseInt(a)+parseInt(b))}
    return(
        <>
        <p>Enter the first number <input type="text" onChange={first}></input></p>
        <p>Enter the second number <input type="text" onChange={second}></input></p>
        <p><button onClick={Add}>Add</button></p>
        </>
    )
}