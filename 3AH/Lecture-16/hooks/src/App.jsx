// import './App.css'
function App() { 
  let count=0;
  function increm()
  {
    count++;
    console.log(count);
  }
  return (
    <>
    <h1>this is a app component....</h1>
      <h1>count : {count}</h1>
      <button onClick={increm}>inc</button>

    </>
  )
}

export default App
