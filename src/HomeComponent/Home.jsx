import React from "react";
import "./Home.scss";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FlareIcon from "@material-ui/icons/Flare";
import StarIcon from "@material-ui/icons/Star";
import MapIcon from "@material-ui/icons/Map";

function Home() {
  return (
    <div>
      <p>300+ stays · Jan 3 - 9</p>
      <h1>Stays in selected map area</h1>
      <div className="home_top">
        <div className="home_right">
          <p>Cancellation flexibility</p>
          <p>Type of place</p>
          <p>Price</p>
          <p>Instant Book</p>
          <p>More filters</p>
        </div>
        <div className="home_left">
          <MapIcon />
          <p>Show map</p>
        </div>
      </div>
      <p>Review COVID-19 travel restrictions before you book. Learn more</p>
      <div className="cards_container">
        <div className="card">
          <div className="img">
            <Button variant="contained" className="card_btn">
              SUPERHOST
            </Button>
            <img
              src="https://www.orchideaviaggi.it/wp-content/uploads/2016/12/agenzia-business-travel.jpg"
              alt="Travel"
            />

            <FavoriteBorderIcon className="card_heart" />
          </div>

          <div className="card_info">
            <div className="card_rate">
              <StarIcon className="card_star" />
              <p>5.0(12)</p>
            </div>
            <p>Entire apparmaent - Bodrum</p>
            <p>Best Sea and Sunset View ad Bodrum</p>
            <p>
              <strike>50 b</strike> <b>385 b</b>/ night
            </p>
            <u>2.508 b total</u>
            <div className="rare_find">
              <FlareIcon />
              <p>Rare find</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <Button variant="contained" className="card_btn">
              SUPERHOST
            </Button>
            <img
              src="https://www.orchideaviaggi.it/wp-content/uploads/2016/12/agenzia-business-travel.jpg"
              alt="Travel"
            />

            <FavoriteBorderIcon className="card_heart" />
          </div>

          <div className="card_info">
            <div className="card_rate">
              <StarIcon className="card_star" />
              <p>5.0(12)</p>
            </div>
            <p>Entire apparmaent - Bodrum</p>
            <p>Best Sea and Sunset View ad Bodrum</p>
            <p>
              <strike>50 b</strike> <b>385 b</b>/ night
            </p>
            <u>2.508 b total</u>
            <div className="rare_find">
              <FlareIcon />
              <p>Rare find</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <Button variant="contained" className="card_btn">
              SUPERHOST
            </Button>
            <img
              src="https://www.orchideaviaggi.it/wp-content/uploads/2016/12/agenzia-business-travel.jpg"
              alt="Travel"
            />

            <FavoriteBorderIcon className="card_heart" />
          </div>

          <div className="card_info">
            <div className="card_rate">
              <StarIcon className="card_star" />
              <p>5.0(12)</p>
            </div>
            <p>Entire apparmaent - Bodrum</p>
            <p>Best Sea and Sunset View ad Bodrum</p>
            <p>
              <strike>50 b</strike> <b>385 b</b>/ night
            </p>
            <u>2.508 b total</u>
            <div className="rare_find">
              <FlareIcon />
              <p>Rare find</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <Button variant="contained" className="card_btn">
              SUPERHOST
            </Button>
            <img
              src="https://www.orchideaviaggi.it/wp-content/uploads/2016/12/agenzia-business-travel.jpg"
              alt="Travel"
            />

            <FavoriteBorderIcon className="card_heart" />
          </div>

          <div className="card_info">
            <div className="card_rate">
              <StarIcon className="card_star" />
              <p>5.0(12)</p>
            </div>
            <p>Entire apparmaent - Bodrum</p>
            <p>Best Sea and Sunset View ad Bodrum</p>
            <p>
              <strike>50 b</strike> <b>385 b</b>/ night
            </p>
            <u>2.508 b total</u>
            <div className="rare_find">
              <FlareIcon />
              <p>Rare find</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
