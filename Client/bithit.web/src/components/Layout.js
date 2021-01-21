import { Button, Dialog, Divider, FormControl, Grid, IconButton, List, ListItem, makeStyles, Modal, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import AlbumSlideShow from './AlbumSlideShow';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import YouTubeIcon from '@material-ui/icons/YouTube';

import WithRoot from './WithRoot';
const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    menuBtn: {
        marginRight: theme.spacing(2)
    },
    content: {
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.8,
        fontSize: 25,
        height: '100%'

    },
    closebtn: {
        color: 'white'
    },
    divider: {
        color: 'white',
        backgroundColor: 'white'
    },
    list: {
        textAlign: 'right',
        lineHeight: "3",
        justifyContent: 'center'

    },
    dialog: {
        opacity: 50,
        position: 'absolute'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'
    },
    appbarFooter: {
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'black'
    },
    appbarHeader: {
        position: 'absolute',
        top: '0px',
        backgroundColor: 'black'
    },
    listItem: {
        justifyContent: 'center'
    },
    musiclistItem: {
        justifyContent: 'left'
    },
    socialBtn: {
        color: '#C0C0C0'
    },
    license: {
        textAlign: 'right',
        fontSize: 12
    },
    img: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginTop: '8%',
        width: '35%'
    },
    musiclist: {
        textAlign: 'right',
        lineHeight: "3",
        justifyContent: 'left',
        fontSize: 18

    },
    musicContent: {
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.8,
        fontSize: 15,
        height: '100%'

    },
    icon: {
        flexGrow: 1
    },
    main: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    }
}));

function Layout(params) {
    const classes = styles();
    const [isOpen, setOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleClick = (e) => {
        setOpen(true);
        let data = {
            isOpen: true
        }
        e.preventDefault();
    }
    const modelClose = () => {
        setOpen(false);
    }
    const itemClick = (e) => {
        setOpen(true);
        setMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <AppBar position='fixed' className={classes.appbarHeader}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuBtn} size="medium"
                        color='inherit' aria-label='menu' onClick={(e) => {
                            handleClick(e);
                        }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} />
                    <Button className={classes.btn} color='inherit' >ENG</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                <Dialog fullScreen open={isOpen} onClose={modelClose} className={classes.dialog}
                    //onClick={(e) => { e.preventDefault(); modelClose() }}
                    PaperProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        },
                    }}
                >
                    <div className={classes.content}>
                        <IconButton className={classes.closebtn} onClick={(e) => { modelClose(); e.preventDefault() }} >
                            <CloseIcon />
                        </IconButton>
                        <div>
                            <Grid container spacing={1}>
                                <Grid item xs={1} />
                                <Grid item xs={isMenuOpen ? 8 : 10}>
                                    <div>
                                        <FormControl className={classes.form}>
                                            <List className={classes.list}>
                                                <br />
                                                <ListItem className={classes.listItem} onClick={() => {
                                                    params.history.push('/');
                                                    setOpen(false);
                                                    setMenuOpen(false);
                                                }}>HOME</ListItem>
                                                <Divider className={classes.divider} color="inherit" />
                                                <ListItem className={classes.listItem} onClick={(e) => {
                                                    itemClick(e);
                                                }}>BTS</ListItem>
                                                <Divider className={classes.divider} />
                                                <ListItem className={classes.listItem}>TOMORROW&TOGETHER</ListItem>
                                                <Divider className={classes.divider} />
                                                <ListItem className={classes.listItem}>LEE HYUN</ListItem>
                                                <Divider className={classes.divider} />
                                            </List>

                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div hidden={!isMenuOpen}>
                                        <FormControl className={classes.form}>
                                            <List className={classes.musiclist}>
                                                <br />
                                                <ListItem className={classes.musiclistItem}
                                                    onClick={() => {
                                                        params.history.push('/');
                                                        setOpen(false);
                                                        setMenuOpen(false);
                                                    }}
                                                >HOME</ListItem>
                                                <ListItem className={classes.musiclistItem}
                                                    onClick={(e) => {
                                                        setMenuOpen(false);
                                                        setOpen(false);
                                                        params.history.push('/profile')
                                                    }}
                                                >PROFILE</ListItem>
                                                <ListItem className={classes.musiclistItem}
                                                    onClick={(e) => {
                                                        setMenuOpen(false);
                                                        setOpen(false);
                                                        params.history.push('/discography')
                                                    }}
                                                >DISCOGRAPHY</ListItem>
                                                <ListItem className={classes.musiclistItem}>SCHEDULE</ListItem>
                                                <ListItem className={classes.musiclistItem}>TOUR</ListItem>
                                            </List>

                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={isMenuOpen ? 1 : 1} />
                            </Grid>

                        </div>

                    </div>
                </Dialog>
                {params.children}
            </main>
            <AppBar position='static' className={classes.appbarFooter}>
                <Toolbar>
                    <IconButton className={classes.socialBtn} ><TwitterIcon /></IconButton>
                    <IconButton className={classes.socialBtn} ><FacebookIcon /></IconButton>
                    <IconButton className={classes.socialBtn} ><YouTubeIcon /></IconButton>
                    <Typography className={classes.title} />
                    <Typography className={classes.license}>COPYRIGHT © 2020 BIG HIT ENTERTAINMENT ALL RIGHTS RESERVED</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default WithRoot((withRouter(props => <Layout  {...props} />)));