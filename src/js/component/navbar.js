import React from "react";

//create your first component
const NavBar = () => {
	return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="d-flex borde1 ancho">
                    <div className="mr-auto p-3">
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="d-flex align-items-end flex-column p-2 borde collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
	);
};

export default NavBar;