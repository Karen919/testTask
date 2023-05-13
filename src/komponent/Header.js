import { useEffect, useState } from "react";

function Header() {
    const arr = ['Demos','Posts','Features','Categories','Shop','Buy Now'];
    const [manu,setManu] = useState([]);
    useEffect(()=>{
      setManu(arr.map((value,index)=>{
        return <li key={index}> 
                  <span className="manu_intro">
                    <span >{value}</span>
                    <span className="material-symbols-outlined"> expand_more</span>
                  </span>
                  <ul className="sub_menu">
                      <li><span>{value} Header</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
                      <li><span>{value} layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
                      <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
                      <li><span>Gallery {value}</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
                      <li><span>Video {value}</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
                  </ul>
              </li>
      }))
    },[])
  
    return (
      <div className="header_conteiner">
        <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <span className="heder_intro_logo">
              <span className="logo"></span>
            </span>
        <ul className="menu">
          {manu}
        </ul>
        </header>
      </div>
    );
  }
  
  export default Header;
  