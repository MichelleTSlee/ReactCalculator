import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { fName, lName } from "./names";
import { add, subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <div>
    <p>2 + 2 is {add(2, 2)}</p>
    <p>2 - 2 is {subtract(2, 2)}</p>
    <p>2 * 2 is {multiply(2, 2)}</p>
    <p>2 / 2 is {divide(2, 2)}</p>

    <p>Copyright {`${fName} ${lName}`}</p>
  </div>,
  document.getElementById("root")
);
