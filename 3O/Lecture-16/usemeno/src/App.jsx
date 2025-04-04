import { useMemo, useState } from "react";

function App()
{
  let [inc,setInc]=useState(0);
  let [dec,setDec]=useState(0);
  let memo=useMemo( function update()
  {
    console.log("this is update function");
    return inc*20;
  },[inc]);
 

  function incrm()
  {
    console.log("inside incrm function");
    setInc(inc+1);
  }

  function decrm()
  {
    console.log("inside decrm function");
    setDec(dec-1);
  }
  return (
    <>
    <h1> memo: {memo}</h1>
    <h1> Inc : {inc}</h1>
    <button onClick={incrm}>Inc</button>
    <h2>Dec : {dec}</h2>
    <button onClick={decrm}>Dec</button>
    </>
  )

}

export default App;