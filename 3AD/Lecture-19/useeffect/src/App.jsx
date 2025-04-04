import { useEffect } from "react";
import { useState } from "react";

function App()
{ 
  let [count,setCount]=useState(0);
  let [desc,setDec]=useState(0);
  useEffect(()=>{
    console.log("inside useEffect ...");
  },[count]);

  // useEffect(()=>{
  //   console.log("inside useEffect ...");
  // },[]);


  // useEffect(()=>{
  //   console.log("inside useEffect ...");
  // });
  function incrm()
  {
    console.log("inside incrm function ....");
    setCount(count+1);
  }
  function descr()
  {
    console.log("inside desc function ........");
    setDec(desc-1);
  }
  return(
    <>
      <h1> inc : {count}</h1>
      <h1> desc : {desc}</h1>
      <button onClick={incrm}>inc</button>
      <button onClick={descr}>desc</button>
    </>
  );
}
export default App;