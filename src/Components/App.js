// import Header from "./header/Header";
// import Main from "./Main/Main";
// import Footer from "./footer/footer";
import { Link,Route, Routes } from "react-router-dom";
import Home from "./navbar/home";
import Contact from "./navbar/contact";
import About from "./navbar/about";
import Store from "./navbar/store";

function App() {



  return (
    <div>
       <span className="manu_intro">
       <Link to="/"></Link>
      {/* <Link to="/store"> </Link>
      <Link to="/contact"></Link>
      <Link to="/about"></Link> */}
       </span>
      <Routes>
         <Route path="/" element={<Home/>}/>
        {/* <Route path="/store" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>  */}

      </Routes>
    </div>
  );
}

export default App;
