import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
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
    const [bgColor, setBgColor] = useState("#353332");
    const classes = styles();

    const goToDetail = (album, color1,color2) => {
        let data = {
            name: album,
            color1:color1,
            color2: color2
        }
        params.history.push('/albumInfo', data);
    }
    return (
        <div style={{ backgroundColor: '#353332' }}>
            <div style={{ height: '20vh' }}></div>
            <div>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 80, fontFamily: 'fantasy' }}>DISCOGRAPHY</div>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => { goToDetail("BE", "#262424","#353332"); }}>
                            <img src={be} className='image' />
                            <div className='imgDesc'>
                                <p className='text'>DELUX EDITION</p>
                                <p className='text'>BE</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Dynamite", "#DD84AB","#FA8EBE")}>
                            < img src={dynamite} className='image' />
                            <div className='imgDesc'>
                                <p className='text'>DIGITAL SINGLE</p>
                                <p className='text'>DYNAMITE</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            < img src = { mots7 } className = 'image' />
                            <div className='imgDesc'>
                                <p className='text'>4TH FULL-LENGTH ALBUM</p>
                                <p className='text'>MAP OF THE SOUL:7</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Persona","#EF7D8A","#F795A0")}>
                            <img src="/assets/persona/persona.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>THE 6TH MINI ALBUM</p>
                                <p className='text'>MAP OF THE SOUL : PERSONA</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/loveyourself/loveys.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>REPACKAGE ALBUM</p>
                                <p className='text'>LOVE YOURSELF結‘ANSWER’</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/sad/sad.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>3RD FULL-LENGTH ALBUM</p>
                                <p className='text'>LOVE YOURSELF轉‘TEAR’</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/her.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>THE 5TH MINI ALBUM</p>
                                <p className='text'>LOVE YOURSELF承‘HER’</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/ynwal.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>2ND SPECIAL ALBUM</p>
                                <p className='text'>YOU NEVER <br />WALK ALONE</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/wings.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>2ND FULL-LENGTH ALBUM</p>
                                <p className='text'>WINGS</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/yfv.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>1ST SPECIAL ALBUM</p>
                                <p className='text'>THE MOST BEAUTIFUL MOMENT IN LIFE :<br />YOUNG FOREVER</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/pt2.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>THE 4TH MINI ALBUM</p>
                                <p className='text'>THE MOST BEAUTIFUL MOMENT IN LIFE PT.2</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/pt1.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>THE 3RD MINI ALBUM</p>
                                <p className='text'>THE MOST BEAUTIFUL MOMENT IN LIFE PT.1</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/dw.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>1ST FULL-LENGHTH ALBUM</p>
                                <p className='text'>DARK & WILD</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent'  onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/skool.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>3RD FULL-LENGTH ALBUM</p>
                                <p className='text'>LOVE YOURSELF轉‘TEAR’</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/rul8.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>THE 6TH MINI ALBUM</p>
                                <p className='text'>MAP OF THE SOUL : PERSONA</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <div className='imgContent' onClick={() => goToDetail("Mots","#455EE8","#2E14EC")}>
                            <img src="/assets/cover/cool.jpg" className='image' />
                            <div className='imgDesc'>
                                <p className='text'>REPACKAGE ALBUM</p>
                                <p className='text'>LOVE YOURSELF結‘ANSWER’</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>

        </div>
    )
}