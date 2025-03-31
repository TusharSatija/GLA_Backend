import { useEffect, useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data,setdata]=useState("");

  //case-1
  // useEffect(()=>{
  //   console.log("this is a useEffect hook");
  // });

  // //case-2
  // useEffect(()=>{
  //   console.log("this is a useEffect hook");
  // },[]);
  // case -3
  useEffect(()=>{
    console.log("this is a useEffect hook");
  },[count]);
  function incrm()
  {
    console.log("this is a count usesate");
    setCount(count+1);
  }
  return (
    <>
      <h1>count :{count}</h1>
      <h1> data : {data}</h1>
      <button onClick={()=>setdata("tushar")}>Show name</button>
      <button onClick={incrm}>inc</button>
    </>
  )
}

export default App
