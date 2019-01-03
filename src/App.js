import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";

const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <div>
           <Greetings firstName="Steven" lastName="Ennis"/>
         </div>
        </header>
      </div>
    );
  

export default App;
