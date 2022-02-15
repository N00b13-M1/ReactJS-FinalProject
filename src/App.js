import React, { Component } from 'react';
import './App.css'
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="text-center text-white">
        Bonjour Isma comment vas-tu ?
        <Footer/>
      </div>
    );
  }
}

export default App;