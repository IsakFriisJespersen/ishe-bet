import React from "react";
import Grid from '@material-ui/core/Grid';

export default class Welcome extends React.Component {
    render() {
        return (
            <div
            >
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"

                >
                    <h3>Ishe-bet EM 2021</h3>
                    <p>Scoreboard</p>
                    <p>Bets</p>
                    <p>Mitt Bet</p>
                    <p
                        onClick={()=> {console.log("hej")}}
                    >Login</p>
                </Grid>
            </div>
        )
    }
}