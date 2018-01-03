import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import HomePage from "./components/Home.js";
import UserPage from "./components/Users.js";

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>Our React Router 4 App</header>
    <PrimaryHeader />
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UserPage} />
    </main>
  </div>
);

const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>React App</h1>
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      &nbsp;|&nbsp;
      <NavLink to="/users" activeClassName="active">
        Users
      </NavLink>
    </nav>
  </header>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

export { App };
