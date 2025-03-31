import { useState } from "react";

function App1()
{
    function incr()
    {
        setcount(count+1);
    }
    let [count,setcount]=useState(0);
    return(
        <>
            <h1> Count :{count}</h1>
            {/* <button onClick={()=>setcount(count+1)}>Increment</button> */}
            <button onClick={incr}> Increment</button>

        </>
    );
}
export default App1;
