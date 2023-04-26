import "../../styles/Home.css"
import React from 'react';
import { Grid } from "@mui/material";
import MemeTeam from "../../assets/meme team.jpg"

const MeetTheTeam: React.FC = () => {
    // TODO
    return (
        <div className="MeetTheTeamContainer">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2 id="meet-the-team-title">
                        Meet the team
                    </h2>
                </Grid>
                <Grid item xs={12}>
                    <img src={MemeTeam} id="memeteam"/>
                </Grid>
            </Grid>
        </div>
    )
}
export default MeetTheTeam;