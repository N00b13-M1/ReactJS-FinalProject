import React from 'react';
import './home.sass';
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Contact from '../contact/Contact.js';


function Home() {  
    return (
        <div>
            <Header />
            <Contact/>
            <Footer />
        </div>
    )
}

export default Home;