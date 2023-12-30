export default function Demo()
{
    var disp=(f)=>{console.log(f.target.value)}
    return(
        <>
        <button onClick={disp} value="b1">button1</button>
        <button onClick={disp} value="b2">button2</button>
        <button onClick={disp} value="b3">button3</button>
        <button onClick={disp} value="b4">button4</button>
        </>
    )
}