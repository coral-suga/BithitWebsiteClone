import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import be from '../assets/be.png';
import dynamite from '../assets/dynamite.png';
import mots7 from '../assets/mots7.png';
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import '../custom.css';
const styles = makeStyles((theme) => ({
    img: {
        marginTop: 'auto',
        width: '100%'
    }

}));
export default function Discography(params) {
    const classes = styles();
    return (
        <div style={{ backgroundColor: '#353332' }}>
            <div style={{ height: '20vh' }}></div>
            <div>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 80, fontFamily: 'fantasy' }}>DISCOGRAPHY</div>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent'>
                            <img src={be} className='image' onClick={(e)=>{
                                params.history.push('/detailAlbum')
                            }}/>
                            <div onClick={(e)=>{
                                params.history.push('/detailAlbum')
                            }} className='imgDesc'>
                                <p className='text'>DELUX EDITION</p>
                                <p className='text'>BE</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'>
                            <img src={dynamite} className='image' />
                            <div className='imgDesc'>
                                <p className='text'>DIGITAL SINGLE</p>
                                <p className='text'>DYNAMITE</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'>
                            <img src={mots7} className='image' />
                            <div className='imgDesc'>
                                <p className='text'>4TH FULL-LENGTH ALBUM</p>
                                <p className='text'>MAP OF THE SOUL:7</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>

        </div>
    )
}