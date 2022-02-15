import React from 'react';
import './home.sass';
import Navigation from "../navigation/Navigation.js"
import HeroBanner from "../hero-banner/HeroBanner.js";
import Footer from "../footer/Footer.js";
import OurProduct from "../home/OurProduct.js";


function Home() {  
    return (
        <div>
            <Navigation />
            <HeroBanner/>
            <OurProduct />
            <Footer />
        </div>
    )
}

export default Home;