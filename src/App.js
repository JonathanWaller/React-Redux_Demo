import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      // Remember to always wrap the outermost element with <Provider>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Redux</h1>
          </header>
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App;
