// import { useState } from 'react' 
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let count=0;
  function inc()
  {
    count++;
    console.log(count);
  }
  return (
    <>
      <h1> count : {count} </h1>
      <button onClick={inc}>increm</button>
    </>
  )
}

export default App
