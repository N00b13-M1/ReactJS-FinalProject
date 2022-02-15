import React from 'react'
import ContactForm from './ContactForm';
import Navigation from "../navigation/Navigation.js";
import Footer from "../footer/Footer.js";


export default function Contact() {
    return (
        <div>
            <Navigation />
            {/* Banner */}
            <ContactForm/>
            <Footer />
        </div>
    )
}
