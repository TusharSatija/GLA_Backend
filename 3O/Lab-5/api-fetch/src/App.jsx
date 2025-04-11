import axios from "axios";
import { useEffect, useState } from "react";

function App()
{
  let [loading,setLoading]=useState(false);
  let [data1,setdata]=useState("");
  useEffect(()=>{
    async function fetchapi()
    {
      try{
        let res=await axios.get("https://api.tvmaze.com/search/shows?q=boys");
        // console.log(res.data[0].show.language);
        // console.log(data1);
        setdata(res);
      }
      catch(err)
      {
        console.log("Something went wrong",err);
      }
      finally{
        setLoading(false);
      }
    }
    fetchapi();
  },[])

  if(loading)
  {
    <h1>Loading ...........</h1>
  }
  return(
    <>
      <h1>Api fetch</h1>
      <h3>Language: {data1.data[0].show.language}</h3>
    </>
  )
}
export default App;
