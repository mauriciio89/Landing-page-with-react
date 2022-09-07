import React from "react";
import Jumbotron from "./jumbotron.jsx"
import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center container-fluid">
			<div>
			<Navbar/>
			</div>
			<Jumbotron/>
			<div className="d-flex justify-content-around">
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
