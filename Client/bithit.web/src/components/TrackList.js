import { Grid, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
const styles = makeStyles(theme => ({
    list: {
        lineHeight: 1,
        color: 'white',
        fontSize: '20px',
        fontFamily:['Camber-SB', 'NotoSansCJKkr-M']
    }
}));
export default function TrackList(params) {
    const classes = styles();
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <div>
                        <p style={{ fontSize: '35px', textAlign: 'center',
                         color: 'white', fontWeight: 'bold', fontFamily: ['MVB-SolanoGothicMVB-B', 'NotoSansCJKkr'] }}>TRACK</p>
                        <List className={classes.list}>
                            {/* <ListItem>1&nbsp;&nbsp;<b> Life Goes On </b>&nbsp;&nbsp; 3’27”</ListItem>
                            <ListItem>2&nbsp;&nbsp;<b> Fly To My Room </b>&nbsp;&nbsp; 3’42”</ListItem>
                            <ListItem>3&nbsp;&nbsp;<b> Blue & Grey </b>&nbsp;&nbsp; 4’15”</ListItem>
                            <ListItem>4&nbsp;&nbsp;<b> Skit </b>&nbsp;&nbsp; 3’00”</ListItem>
                            <ListItem>5&nbsp;&nbsp;<b> Telepathy </b>&nbsp;&nbsp; 3’22”</ListItem>
                            <ListItem>6&nbsp;&nbsp;<b> Dis-ease </b>&nbsp;&nbsp; 4’00”</ListItem>
                            <ListItem>7&nbsp;&nbsp;<b> Stay </b>&nbsp;&nbsp; 3’25”</ListItem>
                            <ListItem>8&nbsp;&nbsp;<b> Dynamite </b>&nbsp;&nbsp; 3’19”</ListItem> */}
                            {params.tracklist.map((track,index)=>{
                                return <ListItem id={index}>{track}</ListItem>
                            })}
                        </List>
                    </div>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </>
    )
}