import React from 'react';
import './app.sass';
import Navigation from "./navigation/Navigation.js"
import Home from "./home/Home.js";
import Product from "./products/Product.js";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";
import Panier from "./panier/Panier.js";
import Coeur from "./coeur/Coeur.js";
import Footer from "./footer/Footer.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {  
  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/product"} element={<Product/>} />
            <Route path={"/about"} element={<About/>} />
            <Route path={"/contact"} element={<Contact/>} />
            <Route path={"/panier"} element={<Panier/>} />
            <Route path={"/coeur"} element={<Coeur/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;