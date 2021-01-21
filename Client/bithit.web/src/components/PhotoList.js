import { Grid, IconButton, makeStyles, MobileStepper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import '../custom.css'
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
        // width: '100vh',
        // height: '120vh'
        maxWidth: '100%'
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
export default function PhotoList(params) {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([]);
    const [name, setName] = useState('BTS');
    const [isData, setIsData] = useState(false);
    const classes = useStyle();
    useEffect(() => {
        setSteps(params.images);
        setIsData(true);
        setActiveStep(0);
    }, [params.images, isData])
    return (
        <>
            {isData ?
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <img
                            className={classes.img}
                            src={steps[activeStep].img}

                        />
                        
                    </Grid>
                    
                    <Grid item xs={12}>
                        <MobileStepper variant={null} steps={5} position='static' activeStep={activeStep}
                            style={{ backgroundColor: '#1E1E1D' }}
                            nextButton={
                                <IconButton onClick={(e) => {
                                    // setActiveStep(activeStep + 1); 
                                    e.preventDefault();
                                    (steps.length - 1 <= activeStep ? setActiveStep(activeStep - (steps.length - 1)) : setActiveStep(activeStep + 1))
                                }}
                                >
                                    <KeyboardArrowRight />
                                </IconButton>
                            }
                            backButton={
                                <IconButton onClick={(e) => {
                                    e.preventDefault();
                                    steps.length == activeStep ? setActiveStep(0) : setActiveStep(activeStep - 1);
                                }} disabled={activeStep == 0}>
                                    <KeyboardArrowLeft />
                                </IconButton>
                            }
                        >
                        </MobileStepper>
                    </Grid>
                </Grid> : null
            }
        </>
    )
}