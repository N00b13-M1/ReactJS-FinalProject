import React from 'react';
import './home.sass';
import HeroBanner from "../hero-banner/HeroBanner.js";
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
        </div>
    )
}

export default Home;


