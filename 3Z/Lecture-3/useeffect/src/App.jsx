import { useEffect, useState } from "react";

function App()
{
  let [count,seCount]=useState(0);
  useEffect(()=>{
    console.log("inside UseEffect hook");
  });

  function inc()
  {
    seCount(count+1);
    console.log("inside usestate inc function");
  }
  return(
    <>
      <h1> Learning UseEffect</h1>
      <h1> Count :{count}</h1>
      <button onClick={inc}>Inc</button>
    </>
  )
}
export default App;