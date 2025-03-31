import { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [data,setdata]=useState("efg");
  // case-1 
  // useEffect(()=>{
  //   console.log("this is a UseEffect hook");
  // })
  // case-2
  //   useEffect(()=>{
  //     console.log("this is a UseEffect hook");
  //   },[count]);
    
  // case-3
  useEffect(()=>{
      console.log("this is a UseEffect hook");
    },[]);
  function incmr()
  {
    console.log("this is a count state");
    setCount(count+1);
  } 
  function upd()
  {
    console.log("this is a string state");
    setdata(data+" abcd");
  }
  return (
    <>
      <h1> count : {count}</h1>
      <h1> data :{data}</h1>
      <button onClick={upd}>update</button>
      <button onClick={incmr}>inc</button>
    </>
  )
}

export default App
