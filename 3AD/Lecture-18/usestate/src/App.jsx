import { useEffect, useState } from 'react' 
import './App.css'
function App() {
  const [data, setdata] = useState("tushar");
  const [count, setcount] = useState(0);
  useEffect(()=>{
    console.log("inside use Effect hook");
  },[count]);
  function updatename()
  {
    console.log("this is a usestate hook");
    setdata(data+" satija")
  }
  function updatecount()
  {
    console.log("this is a count usesate hook");
    setcount(count+1);
  }
  return (
    <>
      <h1>Name : {data}</h1>
      <h1>Count : {count}</h1>
      <button onClick={updatename}>
        Full name</button>
        <button onClick={updatecount}>
        count</button>
    </>
  )}
export default App
