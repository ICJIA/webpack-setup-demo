import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello.js";
import { Button, Container, Divider } from "semantic-ui-react";

export default class App extends Component {
  state = { counter: 1 };

  btnClick = () => {
    console.log("click");
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="myApp">
        <Hello message="This is the home page" />
        <p>Button clicks: {this.state.counter}</p>
        <Button onClick={this.btnClick}>Click me</Button>
      </div>
    );
  }
}
