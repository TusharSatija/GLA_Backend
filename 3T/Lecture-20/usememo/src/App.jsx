import { useMemo, useState } from "react";

function App()
{
  let [inc,setinc]=useState(0);
  let [dec,setdec]=useState(0);
  let memo=useMemo( function update()
  {
    console.log("inside update function");
    return inc*40;
  },[inc]);
 
  function incrm()
  {
    console.log("inside inc function .....");
    setinc(inc+1);
  }
  function decr()
  {
    console.log("inside decr  function");
    setdec(dec-1);
  }
  return(
    <>
      <h1> update :{memo}</h1>
      <h1> inc : {inc}</h1>
      <button onClick={incrm}>inc</button>
      <h1> dec : {dec}</h1>
      <button onClick={decr}> dec</button>
    </>
  )
}
export default App;