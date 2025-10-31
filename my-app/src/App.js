import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HelloWorld from "./HelloWorld";
import Greeting from "./Greeting";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";
import LoginMessage from "./Message";

function App() {
  return (
    // <div>
    //   <HelloWorld />
    // </div>

    //Greetings
    // <div>
    //   <Greeting name="Alice" />
    //   <Greeting name="Bob" />
    //   <Greeting name="Charlie" />
    // </div>

    //Counter
    // <div>
    //   <Counter />
    // </div>

    //Button Click Alert Handling Event
    // <div>
    //   <ButtonClick />
    // </div>

    //Login message
    // <div>
    //   <LoginMessage isLoggedIn={true} />
    // </div>

    <div>
      <h1> This is a styled component!</h1>
      <button> Click Me!</button>
    </div>
  );
}

export default App;
