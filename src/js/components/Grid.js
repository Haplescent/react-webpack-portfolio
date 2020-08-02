import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageGridList from "./ImageGrid.js";
import ExpansionPanel from "./ExpansionPanel.js";
import ProfileCard from "./ProfileCard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ImageGridList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfileCard />
            <br></br>
            <ExpansionPanel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
