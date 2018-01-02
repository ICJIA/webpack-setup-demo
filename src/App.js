import _ from "lodash";
import "./css/styles.css";
import Hello from "./components/Hello.js";
import Head from "./components/Head.js";
import { Helmet } from "react-helmet";
import img from "./img/favicon.ico";

import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  state = { counter: 1 };

  btnClick = () => {
    console.log("click");
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="myApp">
        <Head />
        <Hello message="Hello from React" />
        <h1>This is a test: {this.state.counter}</h1>
        <button onClick={this.btnClick}>Click me</button>
      </div>
    );
  }
}
