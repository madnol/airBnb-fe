import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.scss";

function Footer() {
  return (
    <div className="color">
      <div className="footer">
        <div className="footer_links">
          <ul>
            <h6>Informazioni</h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <ul>
            <h6>Informazioni</h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <ul>
            <h6>Informazioni</h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <ul>
            <h6>Informazioni</h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              laboriosam!
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer_footer">
        <div className="footer_left">
          <p>
            © 2021 Airbnb, Inc. All rights reserved · Privacy · Termini · Mappa
            del sito · Dettaglio dell'azienda
          </p>
        </div>
        <div className="footer_right">
          <div className="rightIcons">
            <LanguageIcon />
            <span>Italiano(IT)</span>
            <span>€ EUR</span>
          </div>
          <div className="leftIcons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
