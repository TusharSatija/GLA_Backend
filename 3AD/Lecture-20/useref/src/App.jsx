import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function App()
{
  let ref=useRef("null");
  let [count,setcount]=useState(0);
  console.log(ref);
  useEffect(()=>{
    ref.current=count;
  })
  function incrm()
  {
    setcount(count+1);
  }
  return(
    <>
      <h1>previous count : {ref.current}</h1>
      <h1> count : {count}</h1>
      <button onClick={incrm}>inc</button>
    </>
  )
}
export default App;
