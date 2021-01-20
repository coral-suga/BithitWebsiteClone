import { Button, Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import be from '../assets/be.png';
import SingerInfo from './SingerInfo';
import mirror from '../assets/clips/mirror.mp4';
import ref from '../assets/clips/ref.mp4';
import jk from '../assets/clips/jk.mp4';
import jin from '../assets/clips/jin.mp4';
import jm from '../assets/clips/jm.mp4';
import jhope from '../assets/clips/jhope.mp4';
import v from '../assets/clips/v.mp4';
import suga from '../assets/clips/suga.mp4';
import rm from '../assets/clips/rm.mp4';
import gp1 from '../assets/clips/gp1.mp4';
import gp2 from '../assets/clips/gp2.mp4';
import Clips from './Clips';
import TrackList from './TrackList';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const styles = makeStyles((theme) => ({
    img: {
        marginTop: 'auto',
        marginLeft: 'auto',
        width: '100%'
    },
    btn: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'inherit'
    }
}));
export default function AlbumDetail(params) {
    const [url, setUrl] = useState('https://www.youtube.com/embed/-5q5mZbe3V8');
    const [photos, setPhotos] = useState([]);
    const [name, setName] = useState('');
    const [clips, setConceptClips] = useState([mirror]);
    const classes = styles();
    const detailInfo = (e) => {

        setName(e.target.innerHTML);
    }
    return (
        <div style={{ backgroundColor: '#353332', height: 'auto' }}>
            <div style={{ height: '20vh' }}></div>
            <Grid container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                <IconButton style={{ color: 'white' }} size='medium' onClick={() => { params.history.goBack(); }}><KeyboardBackspaceIcon /></IconButton>

                </Grid>
                <Grid item xs={2} />
                </Grid>
            <Grid container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Grid container spacing={10}>
                        <Grid item xs={6}>

                            <img src={be} className={classes.img} />
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ color: 'white' }}>
                                <h3> DELUXE EDITION</h3>
                                <h1> BE</h1>
                                <p style={{ fontSize: '20px', fontFamily: 'inherit' }}>
                                BTS is returning with their new album BE (Deluxe Edition) to unfold another chapter of 2020.
                                </p>
                                <p style={{ fontSize: '20px', fontFamily: 'inherit', textAlign: 'justify' }} >
                                As a sense of helplessness looms in every corner of the world, BTS opens themselves up to express their mixed feelings about this situation—fear and anxiety mingled with the determination to overcome all this. The album consists of a total of eight tracks including the No.1 summer hit “Dynamite” and lead single “Life Goes On”. The latter speaks on behalf of everyone stuck in the new normality brought on by COVID-19: one day, the world stopped without any warning, streets erased of footsteps and the way out is nowhere near in sight. BTS echoes in a low voice the comforting message that in the face of unexpected turns “Life Goes On” and extends their hands towards the future.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} />
            </Grid>
            <div style={{ backgroundColor: '#1E1E1D' }}>
                <Grid container spacing={1}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <p style={{ textAlign: 'center', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>VIDEO</p>

                        <iframe style={{ backgroundColor: 'black' }} width="100%" height='700vh' src={url} />
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div>
            <div style={{ backgroundColor: '#1E1E1D' }}>
                <Grid container spacing={1}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <div style={{ textAlign: 'center', marginTop: '2%' }}>
                            <Button className={classes.btn} onClick={() => { setUrl("https://www.youtube.com/embed/Wq5S8Dt_HQE") }}>MV TEASER1</Button>
                            <Button className={classes.btn} onClick={() => { setUrl("https://www.youtube.com/embed/t3KZnCgiMW0") }}>MV TEASER2</Button>
                            <Button className={classes.btn} onClick={() => { setUrl('https://www.youtube.com/embed/-5q5mZbe3V8') }}>'LIFE GOES ON' MV</Button>
                        </div>
                        <Divider style={{ textAlign: 'center', marginTop: '2%' }} />
                        <div style={{ textAlign: 'center', marginTop: '2%', marginBottom: '2%' }}>
                            <Button className={classes.btn}
                                onClick={() => { setUrl("https://www.youtube.com/embed/yIvb4csSgcs") }}>
                            'LIFE GOES ON' MV :<br />ON MY PILLOW</Button>
                            <Button className={classes.btn}
                                onClick={() => { setUrl("https://www.youtube.com/embed/RvcP6V4h_q4") }}>
                            'LIFE GOES ON' MV :<br />IN THE FOREST</Button>
                            <Button className={classes.btn}
                                onClick={() => { setUrl("https://www.youtube.com/embed/2N-Fsa9Evo0") }}>
                            'LIFE GOES ON' MV :<br />LIKE AN ARROW</Button>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <div>
                        <p style={{ textAlign: 'center', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>PHOTO</p>
                        <SingerInfo name={name} />
                        <div style={{ textAlign: 'center', marginTop: '2%' }}>
                            <Button className={classes.btn} onClick={(e) => { detailInfo(e) }}>BTS</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>V</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>JIMIN</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>RM</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>JUNG KOOK</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>JIN</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>SUGA</Button>
                            <Button className={classes.btn} onClick={(e) => detailInfo(e)}>J-HOPE</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} />
            </Grid>
            <div style={{ backgroundColor: '#1E1E1D', marginTop: '2%', marginBottom: '2%' }}>
                <Grid container spacing={1}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <div>
                            <p style={{ textAlign: 'center', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>CONCEPT CLIP</p>
                            <div style={{ textAlign: 'center', marginTop: '2%', marginBottom: '3%' }}>
                                <Button className={classes.btn} onClick={(e) => {
                                    setConceptClips([mirror]);
                                }}>MIRROR VER.</Button>
                                <Button className={classes.btn} onClick={(e) => setConceptClips([ref])}>REFLECTION VER.</Button>
                                <Button className={classes.btn} onClick={(e) =>
                                    setConceptClips([jk, suga, v, jm, gp1, rm, jhope, gp2, jin])
                                }>ROOM VER.</Button>
                            </div>
                        </div>
                        <Clips clips={clips} />
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <div style={{ marginBottom: '10%' }}>
                        <TrackList />
                    </div>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div >
    )
}