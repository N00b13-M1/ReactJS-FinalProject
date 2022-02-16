import React from 'react';
import './home.sass';
import Navigation from "../navigation/Navigation.js"
import HeroBanner from "../hero-banner/HeroBanner.js";
import Footer from "../footer/Footer.js";
import OurProduct from "../home/OurProduct.js";
import OurStory from '../about/OurStory.js';
import Banner from '../banner/Banner.js'

function Home() {
    
    const array = {
        titles: [
        "ABOUT",
        "COUP DE COEUR",
        "CONTACT"
        ]
    }  
    return (
        <div>
            <Navigation />
            <HeroBanner/>
            <OurProduct />
            <OurStory/>
            {
                array.titles.map((element,index) => {
                    return(
                        <Banner key={index} isma={element}/>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default Home;


