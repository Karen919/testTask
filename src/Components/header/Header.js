// import { useState,useEffect} from "react";
// import MenuBtn from "./MenuBtn";
// import HeaderItem from "./HeaderItems";
// import React from "react";

// function Header() {
//   const arr = ['О нас', 'Контакты', 'Наши Специалисты', 'Услуги'];
//   const [scrollY, setScrollY] = useState(0);
//   const [manuChecked, setManuChacked] = useState(true)

//   useEffect(() => {
//     const handleScroll = ()=> setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY]);

//   return (
//   <React.Fragment>
//       <MenuBtn manuChecked = {manuChecked}  setManuChacked= {setManuChacked}/>
//       <div className= {scrollY<200? 'stycky':'noStycky'}>
//         <ul className= {manuChecked ? 'menu': 'menu_click' }>
//           {arr.map((value, index) => {
//             return <HeaderItem value={value} index={index} />
//           })}
//         </ul>
//       </div>
//   </React.Fragment>); 
// }
// export default Header;
  

// Header.jsx
import { useState, useEffect } from "react";
// import MenuBtn from "./MenuBtn";
// import HeaderItem from "./HeaderItems";
import HeaderLogo from "./HeaderLogo";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // const arr = ['О нас', 'Контакты', 'Наши Специалисты', 'Услуги'];
  const [scrollY, setScrollY] = useState(0);
  const [menuChecked, setMenuChecked] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // const handleMenuItemClick = (value) => {
  //   if (value === 'О нас') {
  //     alert('Вы нажали на "О нас"!');
  //   }
  //   // Добавьте другие обработчики для других пунктов меню при необходимости
  // };

  return (
    <React.Fragment>
      {/* <MenuBtn menuChecked={menuChecked} setMenuChecked={setMenuChecked} /> */}
      <HeaderLogo/>
      <div className={scrollY < 200 ? 'stycky' : 'noStycky'}>
        <ul className={menuChecked ? 'menu' : 'menu_click'}>
        <span className="manu_intro">
            {/* <Link to="/"  className="manu_intro_text">Услуги</Link>
            <Link to="/store"  className="manu_intro_text">Магазин</Link>
            <Link to="/contact"  className="manu_intro_text">О нас</Link>
            <Link to="/about"  className="manu_intro_text">Контакты</Link> */}

          </span>
          
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
