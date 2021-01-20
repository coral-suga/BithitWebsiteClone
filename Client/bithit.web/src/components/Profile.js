import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import profile from '../assets/profile.png';
import rm from '../assets/rm.jpg';
import jin from '../assets/jin.jpg';
import suga from '../assets/suga.jpg';
import jhope from '../assets/jhope.jpg';
import jimin from '../assets/jimin.jpg';
import v from '../assets/v.jpg';
import jk from '../assets/jk.jpg';
const styles = makeStyles((theme) => ({
    img: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1%',
        display: 'block',
        width: '100%'
    },
    photo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    }
}));
export default function Profile(params) {
    const classes = styles();
    return (
        <div style={{ backgroundColor: 'black' }}>           
            <div style={{ backgroundColor: '#1C1C1C' }}>
                <Grid container spacing={1}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <img src={profile} className={classes.img} /><br />
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <section style={{ fontSize: '40px', fontFamily: 'fantasy', color: 'white' }}>ABOUT BTS</section>
                            </Grid>
                            <Grid item xs={6}>
                                <section style={{ fontSize: '20px', fontFamily: 'inherit', color: '#C0C0C0' }}>
                                    BTS is returning with their new album BE (Deluxe Edition) to unfold another chapter of 2020. As a sense of helplessness looms in every corner of the world, BTS opens themselves up to express their mixed feelings about this situation—fear and anxiety mingled with the determination to overcome all this. The album consists of a total of eight tracks including the No.1 summer hit “Dynamite” and lead single “Life Goes On”. The latter speaks on behalf of everyone stuck in the new normality brought on by COVID-19: one day, the world stopped without any warning, streets erased of footsteps and the way out is nowhere near in sight. BTS echoes in a low voice the comforting message that in the face of unexpected turns “Life Goes On” and extends their hands towards the future.
                    </section>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={0}>
                    <Grid><div style={{ height: '2%', width: '100%' }}></div></Grid>
                </Grid>
            </div>

            <div style={{backgroundColor:'#121212'}}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <div style={{ fontSize: '30px',
                        marginTop:'50%',
                         fontFamily: 'Times',
                         fontWeight:'bold',
                          color: 'white',textAlign:'center' }}>MEMBER</div>
                        </Grid>
                    <Grid item xs={3}><img src={rm} className={classes.photo} /></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}><img src={jin} className={classes.photo} /></Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}><img src={suga} className={classes.photo} /></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}><img src={jhope} className={classes.photo} /></Grid>
                    <Grid item xs={3}><img src={jimin} className={classes.photo} /></Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}><img src={v} className={classes.photo} /></Grid>
                    <Grid item xs={3}><img src={jk} className={classes.photo} /></Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        </div>
    );
}