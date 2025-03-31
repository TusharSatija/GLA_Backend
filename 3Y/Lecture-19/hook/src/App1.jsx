import { useState } from "react";

function App1()
{
    let [count,setCount]=useState(0);
    return(
    <>
        <h1> count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
    </>)
}

export default App1 