import React from "react";
import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar_logo">
          <img
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="airbnb logo"
          />
        </div>
        <div className="navbar_center">
          <div className="options">
            <span>Blabla</span>
            <span className="vt"></span>
            <span>Blabla</span>
            <span className="vt"></span>
            <span>Blabla</span>
          </div>

          <SearchIcon className="search" />
        </div>
        <div className="navbar_right">
          <span>Diventa host</span>
          <LanguageIcon className="theIcon" />
          <div className="right">
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
