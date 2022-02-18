import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";


export default function Navigation() {
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg navbar-light p-2">
                <div className="container-fluid p-0">
                <Link className="nav-link" to="/"><img src="./img/logo.webp" alt="Fashe." /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div className="row d-flex p-0">
                        <ul className="navbar-nav mb-2 mb-lg-0 col-xl-11 col-lg-10 col-md-12 col-12 justify-content-center align-items-center p-0">
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
                        <ul className="d-flex col-xl-1 col-lg-1 col-md-12 col-12 p-0 justify-content-center mx-auto my-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/coeur"><i className="fa-solid fa-heart" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/panier"><i className="fa-solid fa-cart-shopping" /></Link>
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
