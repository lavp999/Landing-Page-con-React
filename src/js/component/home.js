import React from "react";

import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<Card />
			<Card />
			<Card />
			<Card />
		</>
	);
};

export default Home;
