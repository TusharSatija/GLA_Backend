import { useEffect, useRef, useState } from "react";

function App1()
{
    let [count,setCount]=useState(0);
    let ref=useRef(null);
    console.log(ref);
    useEffect(()=>{
        ref.current=count;
    })
    function incrm()
    {
        setCount(count+1);
    }
    return(
        <>
            <h1>ref : {ref.current} </h1>
            <h1>Count : {count}</h1>
            <button onClick={incrm}>inc</button>
        </>
    )
}
export default App1;