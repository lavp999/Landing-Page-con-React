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
				<Jumbotron />
				<div className="card-deck d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
