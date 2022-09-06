import React from "react";

//include images into your bundle


//create your first component
const Card = () => {
	return (
		<div className="card" style={{width: "18rem"  }}>
  <img className="card-img-top" src="https://picsum.photos/500/400?random=1" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
  </div>

  
	);
};

export default Card;
