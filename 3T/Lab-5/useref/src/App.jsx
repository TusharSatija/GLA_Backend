import { useEffect, useRef, useState } from "react"
function App()
{
  let [count,setCount]=useState(0);
  let ref =useRef('null');
  console.log(ref);
  useEffect(()=>{
    ref.current=count
  })
  return(
    <>
      <h1>previous count :{ref.current}</h1>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
    </>
  )
}
export default App