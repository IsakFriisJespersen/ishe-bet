import React from "react";
import ReactDOM from "react-dom";

export default function App(props: any) {
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" id="login" href="#" onClick={props.onSectionChange}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="registration" href="#" onClick={props.onSectionChange}>Registration</a>
          </li>
        </ul>
    );
  }