import React from "react";
import "./Home.scss";
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
    </div>
  );
}

export default Home;
