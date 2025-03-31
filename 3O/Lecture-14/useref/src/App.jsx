import { useEffect, useRef, useState } from 'react' 
import './App.css'

function App() { 
  let [count,setCount]=useState(0);
  let ref=useRef('null');
  useEffect(()=>{
    ref.current=count;
  })
  console.log(ref);
  return (
    <>
      <h1>Pre count: {ref.current}</h1>
      <h1>count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
    </>
  )
}

export default App
