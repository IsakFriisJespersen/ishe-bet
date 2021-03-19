import React from "react";
import ReactDOM from "react-dom";
import Login from '../login/login';

export default function App() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Ishe-bet EM21</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Scoreboard</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">My Bet</a>
              </li>
            </ul>
          </div>
          <div className="justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Login</a>
              </li>
            </ul>
          </div>
          <Login/>
        </nav>
    );
  }