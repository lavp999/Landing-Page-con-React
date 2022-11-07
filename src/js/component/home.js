import React from "react";

import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

//create your first component
const Home = () => {
  return (
    <>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="container align-items-center">
        <div className="row d-flex justify-content-center borde">
          <Jumbotron />
        </div>
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-col-3" >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* <div className="row card-deck d-flex justify-content-between borde1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
    </>
  );
};

export default Home;
