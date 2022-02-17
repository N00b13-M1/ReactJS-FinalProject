import React from 'react';
import './app.sass';
import Navigation from "./navigation/Navigation.js"
import Home from "./home/Home.js";
import Product from "./products/Product.js";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";
import Coeur from "./coeur/Coeur.js";
import Panier from "./panier/Panier.js";
import Footer from "./footer/Footer.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {  
  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/product"} element={<Product/>} />
            <Route path={"/about"} element={<About/>} />
            <Route path={"/contact"} element={<Contact/>} />
            <Route path={"/coeur"} element={<Coeur/>} />
            <Route path={"/panier"} element={<Panier/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}




