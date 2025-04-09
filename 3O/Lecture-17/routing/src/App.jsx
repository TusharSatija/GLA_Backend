import { Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About"; 
import Contact from "./Component/Contact";
function App()
{
  return(
    <>
      <ul>
        <li><Link to={'/home'}>home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>contact</Link></li>
      </ul>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/conatct' element={<Contact/>}></Route>
      </Routes>
    </>
  )
};
export default App;