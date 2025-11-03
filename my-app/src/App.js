// import "./App.css";
import axios from "axios";
import "./styles.css";
import React from "react";
import HelloWorld from "./HelloWorld";
import Greeting from "./Greeting";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";
import LoginMessage from "./Message";
import ShowCat from "./SourceCat";
import DataFetchingComponent from "./DataFetchingComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Demo </h1>
        <ShowCat />
      </header>
    </div>
  );
}

export default App;
