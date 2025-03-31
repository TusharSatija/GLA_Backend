import { useState } from "react";
function App2()
{
    let [data,setData]=useState("tushar");
    return(
        <>
            <h1>name : {data}</h1>
            <button onClick={()=>setData(data+" Satija")}>
                add last name
            </button>
        </>
    )
}
export default App2;