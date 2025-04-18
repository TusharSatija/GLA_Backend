import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App()
{
  let [data1,setdata]=useState([]);
  let [Loading,setLoad]=useState(true);
  useEffect(()=>{
   async function fetch()
    { 
      try{
        let res=await axios.get("https://api.tvmaze.com/search/shows?q=boys");
        console.log(res.data);
        console.log(data1[0].show.averageRuntime);
        setdata(res.data);
       }
      catch(err)
      {
        console.log(err);
      } 
      finally{
        setLoad(false);
      }

    }
    fetch()
  },[]);

  if(Loading)
  {
      <h1> Loading .........</h1>
  }
  return(
    <>
      <ul>
        <li>
        averageRuntime : {data1[0].show.averageRuntime}
        <img src={data1[0].show.image.medium} alt="nothing found" />
        </li>
      </ul>
    </>
  );
}
export default App;
