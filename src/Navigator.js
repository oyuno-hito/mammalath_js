import React from 'react';
import './Navigator.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
function Navigator() {
    const mock_num = 30
    const mock_list = [...Array(mock_num).keys()].map((number) => { return <li><span>{"候補手" + (number + 1)}</span></li> }
    )

    return (
        <Grid container alignItems="center" justify="center">
            <Grid item xs={12} sm={12} >
                <Paper>
                    {/* <span id="navigator"> */}
                    <ul className="navigator_list">
                        {mock_list}
                    </ul>
                    {/* </span> */}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Navigator;