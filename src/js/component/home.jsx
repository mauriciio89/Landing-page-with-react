import React from "react";
import Jumbotron from "./jumbotron.jsx"
import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>

		
		</div>
	);
};

export default Home;
