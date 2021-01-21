import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
const styles = makeStyles(theme => ({
    vd: {
        width: '100%'
    }
}))
export default function Clips(params) {
    const classes = styles();
    console.log(params)
    return (
        <>
            {
                params.clipsVd.length > 1 ?
                    <Grid container spacing={1}>
                        {
                            params.clipsVd.map((clip, index) => {
                                return <Grid item xs={4}><video className={classes.vd} src={clip.clips} /></Grid>
                            })
                        }

                    </Grid> :
                    <Grid container spacing={1}>
                        {
                            params.clipsVd.map((clip, index) => {
                                return <Grid item xs={12}><video className={classes.vd} src={clip.clips} /></Grid>
                            })
                        }

                    </Grid>
            }
        </>
    );
}