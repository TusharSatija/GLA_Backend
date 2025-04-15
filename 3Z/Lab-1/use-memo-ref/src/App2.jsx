import { useMemo, useState } from "react";

function App2()
{   
    let [inc,setInc]=useState(0);
    let [dec,setdesc]=useState(0);

   let memo=useMemo(()=>{
        console.log("this is update function");
        return inc*10;
    },[inc]);
    
    function incrm()
    {
        console.log("this is a incrm function");
        setInc(inc+1);
    }
    function decrm()
    {
        console.log("this is a  decrement function");
        setdesc(dec-1);
    }
    return(
        <>
            <h1>{memo}</h1>
            <h1>incrment : {inc}</h1>
            <button onClick={incrm}>Incrm</button>
            <h1> decremrnt : {dec}</h1>
            <button onClick={decrm}>Decrm</button> 
        </>
    )
}
export default App2;