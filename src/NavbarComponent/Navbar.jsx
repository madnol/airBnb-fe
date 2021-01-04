import React from "react";
import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Typography } from "@material-ui/core";
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
            <Typography variant="body1">Bormio</Typography>
          </div>
          <div className="vt"></div>
          <div className="center_two">
            <Typography variant="body1">5 gen - 8 feb </Typography>
          </div>
          <div className="vt"></div>
          <div className="center_three">
            <Typography variant="body1">Aggiungi i posti</Typography>
          </div>
          <div className="center_four">
            <SearchIcon className="search" />
          </div>
        </div>

        <div className="navbar_right">
          <div className="right_one">
            <Typography variant="body1">Diventa Host</Typography>
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
