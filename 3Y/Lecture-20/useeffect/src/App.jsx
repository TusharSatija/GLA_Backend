import { useEffect } from "react";
import { useState } from "react";

function App()
{ 
  let [count,setCount]=useState(0);
  useEffect(()=>{ 
    console.log("this is a use Effect function");
  })
  function incm()
  {
    setCount(count+1);
    console.log("inside incm function");
  }
  return(
    <>
      <h1>count:{count}</h1>
      <button onClick={incm}>inc</button>
    </>
)}
export default App;