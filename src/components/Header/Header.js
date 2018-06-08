import React from "react";
import logo from "../../assets/testio-logo-dark.png";
import "./Header.css";
import LogoutIcon from "../LogoutIcon/LogoutIcon";

const header = props => {
  return (
    <header className="header">
      <div className="header-logo-container">
      <img src={logo}/>
      </div>
      <div>
        
        <button onClick={props.logout}><LogoutIcon/>Logout</button>
      </div>
    </header>
  );
};

export default header;
