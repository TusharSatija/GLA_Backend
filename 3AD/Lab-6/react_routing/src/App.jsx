import { Link,Route,Routes} from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import About from "./Component/About";
function App()
{
  return(
    <>
      <nav>
        <li><Link to={'/home'} >Home</Link> </li>
        <li><Link to={'/about'} >About US</Link>  </li>
        <li><Link to={'/login'} >Login</Link></li>
      </nav>


    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  )
}
export default App;