import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));
function FlexExample() {

    const classes = useStyles();
    return (<div><Grid container className={classes.root} justify="center">
        <Grid item xs={6}><Paper>aaaa</Paper></Grid>

        <Grid item xs={6}><Paper>bvv</Paper></Grid>
    </Grid></div>)
}

export default FlexExample