import React from "react";
import ReactDOM from "react-dom";
import Login from '../Login/login';

export default function App(props: any) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Ishe-bet EM21</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" id="scoreboard" onClick={ props.onSectionChange } href="#">Scoreboard</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="mybet" onClick={ props.onSectionChange } href="#">My Bet</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="admin" onClick={ props.onSectionChange } href="#">Admin</a>
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