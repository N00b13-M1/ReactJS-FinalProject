import React from 'react';
import './home.sass';
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Contact from '../contact/Contact.js';
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
            <Header />
            <OurProduct />
            <Contact/>
            <OurStory/>
            {
                array.titles.map((element,index) => {
                    return(
                        <Banner key={index} title={element}/>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default Home;


