import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

export default class Hello extends Component {
  state = {
    toggle: true
  };
  render() {
    return <div>{this.props.message}</div>;
  }
}

Hello.propTypes = {
  message: PropTypes.string
};
