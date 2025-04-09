import { useMemo } from "react";
import { useState } from "react";

function App()
{
  
  let [str,setstr]=useState("abc");
  let [count,setCount]=useState(0);
  
  
  let memo =useMemo(function update()
  {
    console.log("this is a double function");
    return count*2;
  },[count]);
 
  function upd()
  {
    console.log("this is string update function");
    setstr(str+" hsdj");
  }
  function  inc()
  {
    console.log("this is incmrent function");
    setCount(count+1);
  }
  return(
    <>
      <h2>{memo}</h2>
      <h1> str: {str}</h1>
      <button onClick={upd}>update</button>
      <h1> count : {count}</h1>
      <button onClick={inc}>increm</button>
    </>
  )
}
export default App;