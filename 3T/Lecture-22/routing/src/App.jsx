import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Link } from "react-router-dom";
function App()
{
  return(
    <>
    <nav> 
      <ul>  
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
      </ul>
    </nav>
        <Routes>  
        <Route path="/home"  element={<Home/>}>home</Route>   
        <Route path="/about" element={<About/>}>About US</Route>   
        </Routes>
    </>
    )
}
export default App;
