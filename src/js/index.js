//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
