import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App()
{
  let ref=useRef("null");
  console.log(ref);
  let [count ,setCount]=useState(0);
  useEffect(()=>{
    ref.current=count;
  })
  return(
    <>
      <h1>Pre Count : {ref.current}</h1>
      <h1> counnt: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>
        increment
      </button>
    </>
  );
}
export default App;