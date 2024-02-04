import { useState,useEffect} from "react";
import MenuBtn from "./MenuBtn";
import HeaderItem from "./HeaderItems";
import React from "react";

function Header() {
  const arr = ['О нас', 'Контакты', 'Наши Специалисты', 'Услуги'];
  const [scrollY, setScrollY] = useState(0);
  const [manuChecked, setManuChacked] = useState(true)

  useEffect(() => {
    const handleScroll = ()=> setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
  <React.Fragment>
      <MenuBtn manuChecked = {manuChecked}  setManuChacked= {setManuChacked}/>
      <div className= {scrollY<200? 'stycky':'noStycky'}>
        <ul className= {manuChecked ? 'menu': 'menu_click' }>
          {arr.map((value, index) => {
            return <HeaderItem value={value} index={index} />
          })}
        </ul>
      </div>
  </React.Fragment>); 
}
export default Header;
  