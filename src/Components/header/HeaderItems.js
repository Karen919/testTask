
  import SubMenu from "./SubMenu";

function HeaderItem ({index, value}) {
    return (
        <li key={index}> 
          <span className="manu_intro">
            <span  className="manu_intro_text">{value}</span>
            <span className="material-symbols-outlined"> expand_more</span>
          </span>
            <SubMenu value={value}/>
        </li>
    )
 }

 export default HeaderItem;