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
import _ from 'lodash';
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
    const [imgList, setImgList] = useState();
    const [bgcolor, setBgColor] = useState();
    const [color, setColor] = useState();
    const [btnName, setBtnName] = useState();
    const [imgName, setImgName] = useState();
    const [conceptName, setConceptName] = useState();
    const classes = styles();
    useEffect(() => {
        let albumN = params.location.state ? params.location.state.name : '';
        let color1 = params.location.state ? params.location.state.color1 : '#353332';
        let color2 = params.location.state ? params.location.state.color2 : '#353332';
        setAlbumName(name);
        setColor(color1);
        setBgColor(color2)
        if (albumN == "BE") {
            setAlbum(data.be);
            setImgList(data.be.PtButton[0].image)
            setImgName(data.be.PtButton[0].name)
            setConceptClips(data.be.ConceptClips[0].clipVd)
            setUrl(data.be.Video.url)
            setConceptName(data.be.ConceptClips[0].name)
            setBtnName(data.be.Video.name)
        }
        else if (albumN == "Dynamite") {
            setAlbum(data.dynamite);
            setImgList(data.dynamite.PtButton[0].image)
            setUrl(data.dynamite.Video.url)
            setImgName(data.dynamite.PtButton[0].name)
            setBtnName(data.dynamite.Video.name)
            //setConceptClips(data.dynamite.ConceptClips[0].clipVd)
        }
        else if (albumN == "Persona") {
            setAlbum(data.persona);
            setImgList(data.persona.PtButton[0].image)
            setUrl(data.persona.Video.url)
            setImgName(data.persona.PtButton[0].name)
            setBtnName(data.persona.Video.name)
            //setConceptClips(data.dynamite.ConceptClips[0].clipVd)
        }
        else {
            setAlbum(data.mots);
            setImgList(data.mots.PtButton[0].image)
            setUrl(data.mots.Video.url)
            setImgName(data.mots.PtButton[0].name)

            setBtnName(data.mots.Video.name)
        }
        setIsData(true);

    }, [albumName, isData, color])
    const detailInfo = (e) => {
        setImgName(e.name)
        setImgList(e.image);
    }
    let c = '"' + color + '"';
    return (
        isData ?
            <div style={{ backgroundColor: bgcolor, height: 'auto' }}>
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
                <div style={{ backgroundColor: color }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <p style={{ textAlign: 'center', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>VIDEO</p>

                            <iframe style={{ backgroundColor: color }} width="100%" height='700vh' src={url} />
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </div>
                <div style={{ backgroundColor: color }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                                {album.VdButton.map((btn, index) => {
                                    return <Button className={classes.btn}
                                        key={index}
                                        style={{ color: (btn.name == btnName ? "white" : "#898588") }}
                                        onClick={() => { setUrl(btn.url); setBtnName(btn.name); }}>{btn.name}</Button>
                                })}

                            </div>
                            <Divider />
                            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                                {_.map(album.Verion,(btn, index) => {
                                    return <Button className={classes.btn}
                                        key={index}
                                        style={{ color: (btn.name == btnName ? "white" : "#898588") }}
                                        onClick={() => { setUrl(btn.url); setBtnName(btn.name); }}>{btn.name}</Button>
                                })}

                            </div>
                            <Divider />
                            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                                {_.map(album.Special, (btn, index) => {
                                    return <Button className={classes.btn}
                                    key={index}
                                        style={{ color: (btn.name == btnName ? "white" : "#898588") }}
                                        onClick={() => { setUrl(btn.url); setBtnName(btn.name); }}>{btn.name}</Button>
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
                                    return <Button
                                        key={index}
                                        style={{ color: (btn.name == imgName ? "white" : "#898588") }}
                                        className={classes.btn} onClick={(e) => { detailInfo(btn) }}>{btn.name}</Button>
                                })}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <div hidden={album.ConceptClips.length <= 0} style={{ backgroundColor: '#1E1E1D', marginTop: '2%', marginBottom: '2%' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <div>
                                <p style={{ textAlign: 'center', color: 'white', fontSize: '45px', fontWeight: 'bold' }}>CONCEPT CLIP</p>
                                <div style={{ textAlign: 'center', marginTop: '2%', marginBottom: '3%' }}>
                                    {album.ConceptClips.map((clip, index) => {
                                        return <Button className={classes.btn}
                                            key={index}
                                            style={{ color: (clip.name == conceptName ? "white" : "#898588") }}
                                            onClick={(e) => {
                                                setConceptName(clip.name)
                                                setConceptClips(clip.clipVd);
                                            }}>{clip.name}</Button>
                                    })}

                                </div>
                            </div>
                            <Clips clipsVd={clips} />
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </div>
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