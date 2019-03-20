import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
    super ()

    this.state = {
      list: [],
      input: ''
    }

  }



  render() {
    return (
      <div className="App">
        <div>
          <p> My to-do list: </p>
        </div>
        
      </div>
    );
  }
}

export default App;
