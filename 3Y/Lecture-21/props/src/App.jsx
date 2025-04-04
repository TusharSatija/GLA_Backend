import { useMemo, useState } from "react";
function App()
{
  let [inc,setinc]=useState(0);
  let [dec,setdec]=useState(0);

  let memo=useMemo(function update()
  {
    console.log("inside update function .....");
    return inc*20;
  },[inc]);

  

  function incr()
  {
    console.log("inside inc function .....");
    setinc(inc+1);
  }
  function decr()
  {
    console.log("inside dec function .....");
      setdec(dec-1);
  }
  return(
    <>
      <h3>update: {memo}</h3>
      <h1>inc : {inc}</h1>
      <h1>decr : {dec}</h1>
      <button onClick={incr}>inc</button>
      <button onClick={decr}>decr</button>

    </>
  )
}
export default App;
