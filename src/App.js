import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Greetings = (props) => <div>Hello! {props.firstName} {props.lastName} !</div>;

const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <div>
           <Greetings firstName="Steven" lastName="Ennis"/>
         </div>
        </header>
      </div>
    );
  

export default App;
