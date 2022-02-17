import React from "react";
import "./herobanner.sass";
import { Link } from "react-router-dom";


export default function HeroBanner() {
    
    return (
        <div>
            {/* Carousel */}
            <div className="title text-center">
                <h2>Women Collection 2022</h2>
                <h1>NEW ARRIVALS</h1>
                <button className="shop-now-button mt-3"><Link className="shop-now" to="/product"> SHOP NOW</Link></button>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/master-slide-04.jpg.webp" className="d-block w-100" alt="Master Slide 01" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/master-slide-03.jpg.webp" className="d-block w-100" alt="Master Slide 02" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/master-slide-02.jpg.webp" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
