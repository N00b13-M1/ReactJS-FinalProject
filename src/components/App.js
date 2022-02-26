import React, { useState } from 'react';
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

// let list = [a , b, c]
// ...list //==> a , b, c
// [...list, d] //==> [a , b, c, d]

export default function App() {  
  // const [variable, setVariable] = useState(12);
  // setVariable(prev => prev + 2)  // => = accolades return//

  // Tableau pour les products likés
  const [tableauLikes, setTableauLikes] = useState([]);
  const addProductLikes = (product) => {
    setTableauLikes(prev => [ ...prev, product ])
    console.log(tableauLikes);
  }

  return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/product"} element={<Product addProductLikesProp={addProductLikes} />} />
            <Route path={"/about"} element={<About/>} />
            <Route path={"/contact"} element={<Contact/>} />
            <Route path={"/coeur"} element={<Coeur tableauLikesProp={tableauLikes}/>} />
            <Route path={"/panier"} element={<Panier/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}




