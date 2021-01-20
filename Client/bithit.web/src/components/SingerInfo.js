import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, makeStyles, MobileStepper } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import v1 from '../assets/v/v1.jpg';
import v2 from '../assets/v/v2.jpg';
import jm1 from '../assets/jm/jm1.jpg';
import jm2 from '../assets/jm/jm2.jpg';
import j1 from '../assets/jin/j1.jpg';
import j2 from '../assets/jin/j2.jpg';
import rm1 from '../assets/rm/rm1.jpg';
import rm2 from '../assets/rm/rm2.jpg';
import jk1 from '../assets/jk/jk1.jpg';
import jk2 from '../assets/jk/jk2.jpg';
import jh1 from '../assets/jh/jh1.jpg';
import jh2 from '../assets/jh/jh2.jpg';
import suga1 from '../assets/suga/suga1.jpg';
import suga2 from '../assets/suga/suga2.jpg';
import cover from '../assets/cover.jpg';


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
        verticalAlign: 'middle',
        width:'100%'
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
export default function SingerInfo(params) {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([]);
    const [name, setName] = useState('BTS');
    const showImage = () => {
        console.log(steps)
        if (name == 'BTS') {
            if (activeStep == 0) return steps[activeStep].image.cover;
        }
        if (name == 'V') {
            if (activeStep == 0) return steps[activeStep].image.v1;
            if (activeStep == 1) return steps[activeStep].image.v2;
        }
        if (name == 'JIMIN') {
            if (activeStep == 0) return steps[activeStep].image.jm1;
            if (activeStep == 1) return steps[activeStep].image.jm2;
        }
        if (name == 'JIN') {
            if (activeStep == 0) return steps[activeStep].image.j1;
            if (activeStep == 1) return steps[activeStep].image.j2;
        }
        if (name == 'SUGA') {
            if (activeStep == 0) return steps[activeStep].image.suga1;
            if (activeStep == 1) return steps[activeStep].image.suga2;
        }
        if (name == 'RM') {
            if (activeStep == 0) return steps[activeStep].image.rm1;
            if (activeStep == 1) return steps[activeStep].image.rm2;
        }
        if (name == 'J-HOPE') {
            if (activeStep == 0) return steps[activeStep].image.jh1;
            if (activeStep == 1) return steps[activeStep].image.jh2;
        }
        if (name == 'JUNG KOOK') {
            if (activeStep == 0) return steps[activeStep].image.jk1;
            if (activeStep == 1) return steps[activeStep].image.jk2;
        }
    }
    useEffect(() => {
        setName(params.name ? params.name : 'BTS');
        let data=getImage(params.name);
        setSteps(data);
        setActiveStep(0);
    }, [params.name]);
    const getImage = (member) => {
        let steps = [];
        if (member == 'V') {
            console.log("V")
            steps = [
                {
                    image: { v1 }
                },
                {
                    image: { v2 }
                }
            ]
        }
        else if (member == 'JIMIN') {
            steps = [
                {
                    image: { jm1 }
                },
                {
                    image: { jm2 }
                }
            ]
        }
        else if (member == 'JIN') {
            steps = [
                {
                    image: { j1 }
                },
                {
                    image: { j2 }
                }
            ]
        }
        else if (member == 'RM') {
            steps = [
                {
                    image: { rm1 }
                },
                {
                    image: { rm2 }
                }
            ]
        }
        else if (member == 'SUGA') {
            steps = [
                {
                    image: { suga1 }
                },
                {
                    image: { suga2 }
                }
            ]
        }
        else if (member == 'JUNG KOOK') {
            steps = [
                {
                    image: { jk1 }
                },
                {
                    image: { jk2 }
                }
            ]
        }
        else if (member == 'J-HOPE') {
            steps = [
                {
                    image: { jh1 }
                },
                {
                    image: { jh2 }
                }
            ]
        }
        else {
            steps = [
                {
                    image: { cover }
                }
            ]
        }
        return steps;
    }
    const classes = useStyle();

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <img
                        className={classes.img}
                        src={steps.length > 0 ? showImage() : cover}
                    />

                </Grid>
                <Grid item xs={12}>
                    <MobileStepper variant={null} steps={5} position='static' activeStep={activeStep}
                        style={{ backgroundColor: '#1E1E1D' }}
                        nextButton={
                            <IconButton onClick={(e) => { setActiveStep(activeStep + 1); e.preventDefault(); }} disabled={activeStep == (steps.length - 1)}>
                                <KeyboardArrowRight />
                            </IconButton>
                        }
                        backButton={
                            <IconButton onClick={(e) => { e.preventDefault(); setActiveStep(activeStep - 1); }} disabled={activeStep == 0}>
                                <KeyboardArrowLeft />
                            </IconButton>
                        }
                    >
                    </MobileStepper>
                </Grid>
            </Grid>
        </>
    );
}