import React from "react";

import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container p-1 fondoJB">
				<Jumbotron />
				<div className="card-deck">
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
