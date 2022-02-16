import React, { Component } from 'react';
import './app.sass';
import Home from "./home/Home.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {  
  return (
      <div>
        <Home />
      </div>
  )
}

export default App;