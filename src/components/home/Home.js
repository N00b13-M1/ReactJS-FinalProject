import React from 'react';
import './home.sass';
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import OurProduct from "../home/OurProduct.js";


function Home() {  
    return (
        <div>
            <Header />
            <OurProduct />
            <Footer />
        </div>
    )
}

export default Home;