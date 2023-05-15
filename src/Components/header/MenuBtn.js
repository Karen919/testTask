import HeaderLogo from "./HeaderLogo";

function MenuBtn ({manuChecked,setManuChacked}) {

  return (
    <header className="header_conteiner">
    <HeaderLogo />
    <input className="menu_btn" type="checkbox" id="menu_btn" onClick={()=> setManuChacked(!manuChecked? true:false )} />
    <label className="menu_icon" htmlFor="menu_btn"><span className="navicon"></span></label>
</header>
  )
}

export default MenuBtn;