import { useState } from 'react'

function App() {
  const [count1, setCount] = useState(0)
  let count=0;
function increment()
{
  count++;
  console.log(count);
}
  return (
    <>
     <h1>count : {count}</h1>
     <h1>count : {count1}</h1>
     <button onClick={increment}>inc</button>
     <button onClick={()=>setCount(count1+1)}>inc</button>
    </>
  )
}

export default App
