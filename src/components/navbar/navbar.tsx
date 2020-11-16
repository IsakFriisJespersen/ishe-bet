import React from "react";
import Grid from '@material-ui/core/Grid';
import Login from '../login/login'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a 
                    className=" navbar-brand"
                    href="#"
                >
                    Ishe-bet EM 2021
                </a>
                <div
                    className="justify-content-right"
                >
                    <a
                        className="navbar-brand "
                        href="#"
                    >
                            Scoreboard
                    </a>
                    <a
                        className="navbar-brand"
                        href="#"
                    >
                            Bets
                    </a>
                    <a
                        className="navbar-brand"
                        href="#"
                    >
                        Mitt Bet
                    </a>
                    <a
                        className="navbar-brand"
                        href="#"
                        onClick={()=> {
                            <Login
                                // isOpen={true}
                            />
                        }}
                    >
                        Login
                    </a>
                </div>
            </nav>
        )
    }
}