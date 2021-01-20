import { Button, Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import be from '../assets/be.png';
import dynamite from '../assets/dynamite.png';
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
import { data } from '../data.js';
import PhotoList from './PhotoList';
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
export default function AlbumInfo(params) {
    const [url, setUrl] = useState('https://www.youtube.com/embed/-5q5mZbe3V8');
    const [photos, setPhotos] = useState([]);
    const [name, setName] = useState('');
    const [clips, setConceptClips] = useState([mirror]);
    const [album, setAlbum] = useState([]);
    const [albumName, setAlbumName] = useState([]);
    const [isData, setIsData] = useState(false);
    const [imgList,setImgList]=useState(data.dynamite.PtButton[0].image);
    const classes = styles();
    useEffect(() => {
        let albumN = params.location.state.name;
        setAlbumName(name);
        if (albumN == "BE") {
            setAlbum(data.be);
        }
        else if (albumN == "Dynamite") {
            setAlbum(data.dynamite);
        }
        else {
            setAlbum(data.mots);
        }
        setIsData(true);
        setUrl(album.Video)
    }, [albumName, isData])
    const detailInfo = (e) => {
        console.log(e)
        setImgList(e);
    }
    return (
        isData ?
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

                                <img src={album.Image[0].img} className={classes.img} />
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ color: 'white' }}>
                                    <h3>{album.Title}</h3>
                                    <h1>{album.SubTitle}</h1>
                                    <p style={{ fontSize: '20px', fontFamily: 'inherit' }}>
                                        {album.About.p1}
                                    </p>
                                    <p style={{ fontSize: '20px', fontFamily: 'inherit' }}>
                                        {album.About.p2}
                                    </p>
                                    <p style={{ fontSize: '20px', fontFamily: 'inherit' }}>
                                        {album.About.p3}
                                    </p>
                                    <p style={{ fontSize: '20px', fontFamily: 'inherit' }}>
                                        {album.About.p4}
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
                                {album.VdButton.map((btn, index) => {
                                    return <Button className={classes.btn}
                                        onClick={() => { setUrl(btn.url) }}>{btn.name}</Button>
                                })}

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
                            <PhotoList images={imgList} />
                            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                                {album.PtButton.map((btn, index) => {
                                    return <Button className={classes.btn} onClick={(e) => { detailInfo(btn.image) }}>{btn.name}</Button>
                                })}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                {/* <div style={{ backgroundColor: '#1E1E1D', marginTop: '2%', marginBottom: '2%' }}>
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
                </div> */}
                <Grid container spacing={1}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <div style={{ marginBottom: '10%' }}>
                            <TrackList tracklist={album.Track} />
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div > : null
    )
}