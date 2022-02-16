import React from 'react';
import './app.sass';
import Navigation from './navigation/Navigation'
import Home from './home/Home.js';
import Product from './products/Product';
import About from './about/About'
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {  
  return (
      // <Router>
      <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          {/* <Home /> */}
          <Footer />
      </BrowserRouter>
      // </Router>
  )
}




