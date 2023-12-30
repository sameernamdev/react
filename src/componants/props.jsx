import Child from "./child"
import Chotachild from "./child2"

export default function Sum()
{
    var x=()=>{console.log("hello world")}
    return(
        <>
        <button onClick={x}>Click me</button>
        <br />
        <Child funcAddress={x}/>
        <br />
        <Chotachild address={x}/>
        </>
    )
}