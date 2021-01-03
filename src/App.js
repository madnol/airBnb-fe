import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "fontsource-roboto";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="App">
      <DetailsPage />
    </div>
  );
}

export default App;
