import React from "react";
import Grid from '@material-ui/core/Grid';
import './navbar.scss'

export default class Welcome extends React.Component {
    render() {
        return (
            <div
                className="divNav"
            >
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"

                >
                    <h3>Ishe-bet</h3>
                    <p>Scoreboard</p>
                    <p>Bets</p>
                    <p>Login</p>
                </Grid>
            </div>
        )
    }
}