import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
        <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore sit sapiente iste quo aliquam eos molestias magni, repellat non voluptates obcaecati, minima accusantium natus magnam perspiciatis ea, alias quasi?</p>
        
        
          <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        
      </div>
	);
};

export default Jumbotron;
