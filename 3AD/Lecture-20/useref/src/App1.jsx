import { useMemo, useState } from "react";

function App1()
{
    let [inc, setInc]=useState(0);
    let [dec, setDec]=useState(0);
    let memo=useMemo(()=>{
        return inc*20;
    },[inc]);
    return(
        <>
            <h1>memo :{memo}</h1>
            <h1>inc :{inc}</h1>
            <button onClick={Incrm} >Inc</button>
            <br />
            <h1>inc :{des}</h1>
            <button onClick={Desc} >desc</button>
        </>
    )
}
export default App1;