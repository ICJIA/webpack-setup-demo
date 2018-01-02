import _ from "lodash";
import "./css/styles.css";
import Hello from "./components/Hello.js";
import Head from "./components/Head.js";
import { Helmet } from "react-helmet";
import img from "./img/favicon.ico";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";
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

        <Divider />

        <Button inverted="true" content="Click me" onClick={this.btnClick} />

        <Divider />
      </div>
    );
  }
}
