import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

   let [selectedMenu , setSelectedMenu ] = useState(0);
  let [ isProfileDropdownOpen , setIsProfileDropdownOpen ] = useState(false);
 
  const handleMenu = (index) =>{
    setSelectedMenu(index);
  }

  const handleProfile = (index) =>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="media/images/DsLogo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link  to="/" onClick={()=>handleMenu(0)}>
            <p  className={selectedMenu==0 ? activeMenuClass : menuClass} >Dashboard</p>
           </Link>
            
          </li>
          <li>
           <Link  to="/orders" onClick={()=>handleMenu(1)}>
            <p className={selectedMenu==1 ? activeMenuClass : menuClass}>Orders</p>
           </Link>
          </li>
          <li>
              <Link to="/holdings" onClick={()=>handleMenu(2)}> 
            <p className={selectedMenu==2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link> 
          </li>
          <li>
             <Link to="/positions" onClick={()=>handleMenu(3)}>
            <p className={selectedMenu==3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={()=>handleMenu(4)}>
            <p className={selectedMenu==4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
           <Link to="/apps" onClick={()=>handleMenu(5)}>
            <p className={selectedMenu==5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div  className="profile" onClick={handleProfile} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
