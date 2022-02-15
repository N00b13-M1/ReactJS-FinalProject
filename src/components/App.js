import React, { Component } from 'react';
import './app.sass';
import Header from "./header/Header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;