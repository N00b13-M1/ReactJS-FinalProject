import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";


function Navigation() {
    
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./img/logo.webp" alt="Fashe." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div className="row">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-11 justify-content-center align-items-center">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="d-flex p-0 col-1">
                            <li className="nav-item">
                                <Link to="/panier"><img src="./img/icon-header-01.png.webp" alt="basket" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/coeur"><img src="./img/icon-header-02.png.webp" alt="basket" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;