import React, { useState } from 'react';
import be from '../assets/be.png';
import bluehour from '../assets/bluehour.png';
import dynamite from '../assets/dynamite.png';
import mots7 from '../assets/mots7.png';
import dream from '../assets/dream.png';
import { Button, IconButton, makeStyles, Grid } from '@material-ui/core';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyle = makeStyles((theme) => ({
    pre: {
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        width: 'auto',
        padding: '16px',
        marginTop: '-22px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        transition: '0.6s ease',
        borderRadius: '0 3px 3px 0',
        userSelect: 'none'
    },
    img: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginTop: '8%',
        verticalAlign: 'middle'
    },
    slideshow: {
        maxWidth: '1000px',
        position: 'relative',
        margin: 'auto'
    },
    mySlides: {
        //display:'none'
    },
    dot: {
        cursor: 'pointer',
        height: '15px',
        width: '15px',
        margin: '0 2px',
        backgrounColor: '#bbb',
        boderRadius: '50%',
        display: 'inline-block',
        transition: 'background-color 0.6s ease'
    }
}));
export default function AlbumSlideShow(params) {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            lable: 'BE',
            image: "/assets/be.png"
        },
        {
            lable: 'Blue Hour',
            image: "/assets/bluehour.png"
        },
        {
            lable: 'Dynamite',
            image: "/assets/dynamite.png"
        },
        {
            lable: 'Dream Chapter Eternity',
            image: "/assets/dream.png"
        },
        {
            lable: 'Map of the soul',
            image: "/assets/mots7.png"
        },
    ]
    const classes = useStyle();
    const showImage = () => {
        console.log(activeStep)
        if (activeStep == 0) return steps[activeStep].image.be;
        if (activeStep == 1) return steps[activeStep].image.bluehour;
        if (activeStep == 2) return steps[activeStep].image.dynamite;
        if (activeStep == 3) return steps[activeStep].image.dream;
        if (activeStep == 4) return steps[activeStep].image.mots7;
        else return ""
    }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '40vh', justifyContent: 'center', textAlign: 'center' }}>
                        <div>
                            <IconButton style={{ color: 'black' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    steps.length == activeStep ? setActiveStep(0) : setActiveStep(activeStep - 1);
                                }} disabled={activeStep == 0}>
                                <KeyboardArrowLeft />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={10} >
                    <div onClick={(e) => { e.preventDefault(); params.onAlbumClick() }}>
                        <img
                            className={classes.img}
                            src={steps[activeStep].image}
                            alt={steps[activeStep].label}
                        />

                    </div>
                </Grid>

                <Grid item xs={1}>
                    <div style={{ display: 'flex',  flexDirection: 'column', paddingTop: '40vh', justifyContent: 'center', textAlign: 'center' }}>
                        <div>
                            <IconButton style={{ color: 'black' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    (steps.length - 1 <= activeStep ? setActiveStep(activeStep - (steps.length - 1)) : setActiveStep(activeStep + 1))
                                }}
                            >
                                <KeyboardArrowRight />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </>
    )
}
