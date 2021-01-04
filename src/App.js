import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "fontsource-roboto";

import Navbar from "./NavbarComponent/Navbar";
import Home from "./HomeComponent/Home";
import Footer from "./FooterComponent/Footer";

import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}

      <DetailsPage />
      <Footer />
    </div>
  );
}

export default App;
