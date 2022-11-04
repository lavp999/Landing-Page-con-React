import React from "react";

const Card = () => {
	return (
        <>
            <div className="card">
                <img src="http://via.placeholder.com/350x150" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">texto de la tarjeta</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
	);
};

export default Card;
