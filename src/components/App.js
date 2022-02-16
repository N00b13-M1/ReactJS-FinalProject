import React, { Component } from 'react';
import './app.sass';
import Home from "./home/Home.js";
import Footer from "../footer/Footer.js";
import Navigation from "../navigation/Navigation.js"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {  
  return (
      <div>
        <Navigation/>
        <Home />
        <Footer />
      </div>
  )
}

export default App;