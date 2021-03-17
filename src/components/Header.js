import React from "react";
import { Link } from "react-router-dom";
import "./../App.scss";


function Header() {
  return (
    <>
      <div className="navBar">
        <h1 className="headerText">Soil-Ent-Green</h1>
          <div className="navButtonBox">
            <button type="button" className="navButton">
              <Link className="linkButton" to = "/">My Plants</Link>
            </button>
            <button type="button" className="navButton">
              <Link className="linkButton" to = "/signin">Sign In</Link>
            </button>  
          </div>
      </div>
    </>  
  );
}

export default Header;