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
          <div className="center_one">
            <p>Bormio</p>
          </div>
          <div className="vt"></div>
          <div className="center_two">
            <p>5 gen - 8 feb </p>
          </div>
          <div className="vt"></div>
          <div className="center_three">
            <p>Aggiungi i posti</p>
          </div>
          <div className="center_four">
            <SearchIcon className="search" />
          </div>
        </div>

        <div className="navbar_right">
          <div className="right_one">
            <p>Diventa Host</p>
          </div>

          <div className="right_two">
            <LanguageIcon className="iconTwo" />
          </div>

          <div className="right_three">
            <MenuIcon />
            <AccountCircleIcon className="iconThree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
