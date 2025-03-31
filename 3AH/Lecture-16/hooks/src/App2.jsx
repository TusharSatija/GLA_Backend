import { useState } from "react";

function App2()
{
    let [data ,setdata]=useState("tushar");
    return(
        <>
        <h1> Name :{data}</h1>
        <button onClick={()=>setdata(data+ "  Satija")}>Full Name</button>
        </>
    );
}
export default App2;