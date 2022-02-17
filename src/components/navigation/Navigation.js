import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";


export default function Navigation() {
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <Link className="nav-link" to="/"><img src="./img/logo.webp" alt="Fashe." /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div className="row">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-11 justify-content-center align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="d-flex p-0 col-1">
                            <li className="nav-item">
                                <Link className="nav-link" to="/coeur"><i className="fa-regular fa-heart" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/panier"><i className="fa-solid fa-heart" /></Link>
                                {/* Cette merde d'icon ne veut pas afficher le panier chez moi, avec le coeur ça marche mais pas le panier?
                                    <i className="fa-regular fa-bag-shopping" />  */}
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
