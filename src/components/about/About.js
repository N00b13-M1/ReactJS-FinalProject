import React from "react";
import OurStory from '../about/OurStory.js';
import Navigation from "../navigation/Navigation.js"
import HeroBanner from "../hero-banner/HeroBanner.js";
import Footer from "../footer/Footer.js";
import OurStory from '../about/OurStory.js';
import "./about.sass";

function OurStory() {
    
    return (
        <div>
            <Navigation />
            <HeroBanner/>
            <OurStory />
            <Footer />
        </div>
    )
}

export default OurStory;


