import { useState } from "react";

// using usestate hook  increment or decrement the state of count
function App3()
{
    let [count,setCount]=useState(0);
    return(
        <>
             <h1> count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>incrm</button>
            <button onClick={()=>setCount(count-1)}>decrm</button>
        </>
    )
}
export default App3;