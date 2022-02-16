import React from 'react';
import './home.sass';
import Navigation from "../navigation/Navigation.js"
import HeroBanner from "../hero-banner/HeroBanner.js";
import Footer from "../footer/Footer.js";
import OurProduct from "../home/OurProduct.js";


function Home() {
    
    // const array = {
    //     titles: [
    //     "ABOUT",
    //     "COUP DE COEUR",
    //     "CONTACT"
    //     ]
    //}  
    return (
        <div>
            <Navigation />
            <HeroBanner/>
            <OurProduct />
            {/* {
                array.titles.map((element,index) => {
                    return(
                        <Banner key={index} title={element}/>
                    )
                })
            } */}
            <Footer />
        </div>
    )
}

export default Home;


