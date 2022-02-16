import React from 'react';
import './home.sass';
import HeroBanner from "../hero-banner/HeroBanner.js";
import OurProduct from "../home/OurProduct.js";

export default function Home() {
    
    // const array = {
    //     titles: [
    //     "ABOUT",
    //     "COUP DE COEUR",
    //     "CONTACT"
    //     ]
    // }  
    return (
        <div>
            <HeroBanner/>
            <OurProduct />
            {/* {
                array.titles.map((element,index) => {
                    return(
                        <Banner key={index} isma={element}/>
                    )
                })
            } */}
        </div>
    )
}


