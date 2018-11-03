import React, { Component } from "react";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import ContactInfo from "./components/ContactInfo";
import User from "./components/User";
import AddContent from "./components/AddContent";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Nav />
        <header className="App-header">
          <p> App Wrapper (src/App) !</p>
        </header>
        <span className="contactInfoClass">
          <ContactInfo />
          <AddContent />
        </span>
      </div>
    );
  }
}

export default App;
