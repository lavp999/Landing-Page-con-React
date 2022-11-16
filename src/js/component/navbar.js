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
      <nav className="container navbar navbar-expand-lg navbar-dark bg-dark d-flex position-relative">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button
          className="navbar-toggler position-absolute end-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="justify-content-end w-100 d-md-none d-sm-none d-lg-flex d-xl-flex d-xxl-flex">
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
        <div className="d-md-flex d-sm-flex d-lg-none d-xl-none d-xxl-none">
          <div className="p-2 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0">
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
