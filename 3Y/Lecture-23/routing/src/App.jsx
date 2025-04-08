import { Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
function App()
{
  return(
    <>
      <nav>
        <ul> <Link to={'/home'}>Home</Link></ul>
        <ul> <Link to={'/about'}>About</Link></ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>


  )
}
export default App;