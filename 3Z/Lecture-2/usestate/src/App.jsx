import { useState } from "react";

function App()
{
  let [count,setcount]=useState(0);
  return(
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>inc</button>
      <h1>This is a functional Component</h1>
    </>
  ) 
}
export default App;