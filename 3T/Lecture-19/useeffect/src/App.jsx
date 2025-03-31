import { useEffect } from "react";
import { useState } from "react";

function App()
{
  useEffect(()=>{
    console.log("inside use Effect hook");
  });
  function incrm()
  {
    console.log("inside usestate count");
    setCount(count+1);
  }
  let [count,setCount]=useState(0);
  return(
    <>
      <h1>count: {count}</h1>
      <button onClick={incrm}>incr</button>
    </>
  )
}
export default App;