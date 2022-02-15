import React, { Component } from 'react';
import './app.sass';
import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Contact from './contact/Contact.js';


function App() {  
  return (
      <div>
        <Header />
        <Contact/>
        <Footer />
      </div>
  )
}

export default App;