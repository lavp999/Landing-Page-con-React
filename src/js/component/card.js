import React from "react";
/*
            <div className="card">
                <img src="http://via.placeholder.com/350x150" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">texto de la tarjeta</p>
                </div>
            </div>

*/
const Card = () => {
	return (
        <div className="col">
            <div className="card mx-2">
            <img className="card-img-top" src="https://react-hello-webapp-iota.vercel.app/rigo-baby.jpg" alt="sss" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="boton">
                <a href="#" className="btn btn-primary btn-lg">Go somewhere</a>
            </div>
        </div>
        </div>
        
	);
};

export default Card;

