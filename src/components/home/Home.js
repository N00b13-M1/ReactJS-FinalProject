import React from 'react';
import './home.sass';
import HeroBanner from "../hero-banner/HeroBanner.js";
import OurProduct from "../home/OurProduct.js";

export default function Home() {
    
    return (
        <div>
            <HeroBanner/>
            <OurProduct />
        </div>
    )
}


