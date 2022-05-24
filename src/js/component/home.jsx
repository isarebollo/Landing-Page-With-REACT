import React from "react";
import Footer from "./footer.jsx";
import Navbar from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Card></Card>
			<Footer></Footer>
		</div>
	);
};

export default Home;
