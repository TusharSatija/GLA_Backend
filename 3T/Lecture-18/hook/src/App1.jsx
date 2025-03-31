import { useState } from "react";
function App1()
{
    let [count,setcount]=useState(0);
    return(
    <>
        <h1> Count :{ count }</h1>
        <button onClick={()=>setcount(count+1)}>increment</button>
    </>
    
)}
export default App1;