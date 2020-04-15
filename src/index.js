import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  return <h2>Hello World</h2>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

const App = () => {
  return <Hello />;
};

ReactDOM.render(<App />, document.getElementById("app"));