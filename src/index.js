import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

import "./styles.css";

var Something = () => {
  return (
    <Nav>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/contact">Contact</NavItem>
    </Nav>
  );
};
var NavItem = ({ url }) => {
  return <div>{url}</div>;
};

var Nav = ({ children }) => {
  var items = React.Children.toArray(children);
  for (var i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className="seperator">
        |
      </span>
    );
  }

  return <div> {items}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Something />, rootElement);
