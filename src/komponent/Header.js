
function Header() {
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   header.classNameList.toggle("sticky", window.scrollY > 200);
  // });
  
    return (
      <div className="header_conteiner">
        <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <span className="heder_intro_logo"><span className="logo"></span></span>
        <ul className="menu">
          <li> 
            <span className="manu_intro"><span >Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Demos Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Demos layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Demos</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Demos</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li> 
          <li> 
            <span className="manu_intro"><span >Posts</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu"  >
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>  
          <li> 
            <span className="manu_intro"><span>Features</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Features Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Features layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Features</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Features</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
          <li> 
            <span className="manu_intro"><span>Categories</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Categories Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Categories layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Categories</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Categories</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li> 
          <li> 
            <span className="manu_intro"><span>Shop</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu"  >
              <li><span>Shop Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Shop layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Shop</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Shop</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>  
          <li> 
            <span className="manu_intro"><span>Buy Now</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Buy Now Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Buy Now layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Buy Now</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Buy Now</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
        </ul>
</header>




        {/* <ul className="header_ul">
          <li> 
            <span><span>Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
          <li> 
            <span><span>Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
          <li> 
            <span><span>Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
          <li> 
            <span><span>Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
          <li> 
            <span><span>Demos</span><span className="material-symbols-outlined"> expand_more</span> </span>
            <ul className="sub_menu">
              <li><span>Post Header</span><span className="material-symbols-outlined sub">arrow_forward_ios</span></li>
              <li><span>Post layout</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Share Buttonr</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Gallery Post</span><span className="material-symbols-outlined">arrow_forward_ios</span></li>
              <li><span>Video Post</span> <span className="material-symbols-outlined">arrow_forward_ios</span></li>
            </ul>
          </li>
        </ul> */}
      </div>
    );
  }
  
  export default Header;
  