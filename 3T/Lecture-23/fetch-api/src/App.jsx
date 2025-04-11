import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App()
{
  let [data,setData]=useState("");
  let [loading,setloading]=useState(true);
  useEffect(
    ()=>{
        async function fetchapi()
        {
        try{
          let res=await axios.get('https://api.tvmaze.com/search/shows?q=boys');
          console.log(data);
          setData(res);
      }
      catch(err)
      {
        console.log("somthing went wrong ...",err);
      }
      finally{
          setloading(loading);
      } 
    } fetchapi()
      } ,[]);
  return(
    <>
    if(loading)
    {
        <h1>Loading .........</h1>
    }
    else
    {
      <h2>data recieved successfully...</h2>
    }

    </>
  )
}
export default App;