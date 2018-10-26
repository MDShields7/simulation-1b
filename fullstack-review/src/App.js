import React, { Component } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import routes from './router';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  // login = () => {




  render() {


    return (
      <div className="App">
        <Navbar/>
        {routes}
      </div>
    );
  }
}

export default App;
