import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import './Components/ArrayList'
import ArrayList from "./Components/ArrayList";

class App extends Component {
  render() {
    return (
      <div className="App">
         <ArrayList />
      </div>
    );
  }
}

export default App;
