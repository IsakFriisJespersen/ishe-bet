import React from "react";
import ReactDOM from "react-dom";
import Welcome from './components/homepage/homepage'
import Bet2021 from './components/form/bet20201'
import Login from './components/login/login'


ReactDOM.render(
  <div>
    <Welcome/>
    <Bet2021/>
    <Login/>
  </div>,
    document.getElementById("root")
);