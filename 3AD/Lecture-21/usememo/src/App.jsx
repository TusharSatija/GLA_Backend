import { useMemo, useState } from "react";

function App()
{
    let [inc, setInc]=useState(0);
    let [dec, setDec]=useState(0);
  let memo=useMemo(()=>{
      console.log("this is a update function ...");
      return inc*20;
  },[inc]);
     
    function Incrm()
    {
      console.log("this is a incr function .....");
      setInc(inc+1);
    }
    function Desc()
    {
      console.log("this is a desc function ");
      setDec(dec-1);
    }
    return(
        <>
            <h1>memo :{memo}</h1>
            <h1>inc :{inc}</h1>
            <button onClick={Incrm} >Inc</button>
            <br />
            <h1>dec :{dec}</h1>
            <button onClick={Desc} >desc</button>
        </>
    )
}
export default App;