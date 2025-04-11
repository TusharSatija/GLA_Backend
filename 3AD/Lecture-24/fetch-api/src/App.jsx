import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App()
{
  let [data1,setData]=useState([]);
  let [loading,setloading]=useState(true);
  useEffect(
    ()=>{
        async function fetchapi()
        {
        try{
          let res=await axios.get('https://api.tvmaze.com/search/shows?q=boys');
          console.log(res.data);
          setData(res.data);
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
      if(loading)
      {
          <h1>Loading .........</h1>
      }
  return(
   <>
    <ul>
      { data1.map((item,index)=>{
        <li key={index}>
          <img src={item.show.image.medium} alt="" srcset="" />
          <p>{item.show.summary}</p>
        </li>
      })}
    </ul> 
    </>
  )
}
export default App;