import React from "react";
/**
 * 
            <div className="d-flex align-items-end flex-column p-2 collapse navbar-collapse" id="navbarSupportedContent">
            <div className="                                   p-2 collapse navbar-collapse" id="navbarSupportedContent">


 */
//create your first component
const NavBar = () => {
	return (
        <>
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

<div className="justify-content-end w-100 borde">
            <div className="p-2 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav justify-content-end">
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
