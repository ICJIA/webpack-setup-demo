import { Helmet } from "react-helmet";
import React, { Component } from "react";
import { render } from "react-dom";

export default class Head extends Component {
  render() {
    return (
      <Helmet>
        <title>Simple Webpack App</title>
        <link rel="canonical" href="http://dev.icjia.cloud" />
      </Helmet>
    );
  }
}
