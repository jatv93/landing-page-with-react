import React from "react";

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;


