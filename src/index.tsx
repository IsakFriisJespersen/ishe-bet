import React from "react";
import ReactDOM from "react-dom";
import Welcome from './components/homepage/homepage'
import Navbar from './components/navbar/navbar'

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
  <div>
    <Navbar/>
    <App />
    <Welcome/>
  </div>,
    document.getElementById("root")
);