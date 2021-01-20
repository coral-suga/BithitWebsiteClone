import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
const styles = makeStyles(theme => ({
    vd: {
        width: '100%'
    }
}))
export default function Clips(params) {
    const classes = styles();
    return (
        <>
            {
                params.clips.length > 1 ?
                    <Grid container spacing={1}>
                        {
                            params.clips.map((clip, index) => {
                                return <Grid item xs={4}><video className={classes.vd} src={clip} /></Grid>
                            })
                        }

                    </Grid> :
                    <Grid container spacing={1}>
                        {
                            params.clips.map((clip, index) => {
                                return <Grid item xs={12}><video className={classes.vd} src={clip} /></Grid>
                            })
                        }

                    </Grid>
            }
        </>
    );
}