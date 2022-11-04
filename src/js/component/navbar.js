import React from "react";

//create your first component
const NavBar = () => {
	return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="row ">
                    <div className="col-1">
                        <a className="navbar-brand" href="#">Bootsatrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-7">   <span></span>        </div>
                    <div className="col-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        </>
	);
};

export default NavBar;