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

    </>
  );
}
export default App;
