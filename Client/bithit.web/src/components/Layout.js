import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Dialog, Divider, FormControl, IconButton, List, ListItem, makeStyles, Modal, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import be from '../assets/be.png';
import AlbumSlideShow from './AlbumSlideShow';
import ContactlessIcon from '@material-ui/icons/Contactless';
import AppleIcon from '@material-ui/icons/Apple';
import MenuList from './MenuList';
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
        justifyContent: 'center'

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
    }
}));
export default function Layout() {
    const [isOpen, setOpen] = useState(false);
    const [isMusicChartOpen, setMusicChartOpen] = useState(false);
    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);
    const classes = styles();
    const modelClose = () => {
        setOpen(false);
    }
    const albumModelClose = () => {
        setMusicChartOpen(false);
    }
    const onAlbumClick = () => {
        setMusicChartOpen(true);
    }
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorE1(null);
    }
    return (
        <div>
            <AppBar position='fixed' className={classes.appbarHeader}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuBtn} size="medium"
                        color='inherit' aria-label='menu' onClick={(e) => { setOpen(true); e.preventDefault(); }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} />
                    <Button className={classes.btn} color='inherit' >ENG</Button>
                </Toolbar>
            </AppBar>
            <AlbumSlideShow onAlbumClick={onAlbumClick} />
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
                    <FormControl className={classes.form}>
                        <List className={classes.list}>
                            <br />
                            <ListItem className={classes.listItem}>HOME</ListItem>
                            <Divider className={classes.divider} color="inherit" />
                            <ListItem className={classes.listItem} aria-haspopup="true"
                             aria-controls={open ? 'menu-list-grow' : undefined} onClick={(e) => { 
                                handleClick(e); e.preventDefault(); }}>BTS</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>TOMORROW&TOGETHER</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>LEE HYUN</ListItem>
                            <Divider className={classes.divider} />
                        </List>
                        <MenuList anchorE1={anchorE1} onClose={handleClose} open={open} />
                    </FormControl>

                </div>
            </Dialog>
            <Dialog fullScreen open={isMusicChartOpen} aria-labelledby="simple-dialog-title"
                onClick={albumModelClose}
                onClose={albumModelClose} className={classes.dialog}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <div className={classes.musicContent}>
                    <IconButton className={classes.closebtn} onClick={(e) => { albumModelClose(); e.preventDefault() }} >
                        <CloseIcon />
                    </IconButton>
                    <FormControl className={classes.form}>
                        <List className={classes.musiclist}>
                            <br />
                            <ListItem className={classes.listItem}>MELON</ListItem>
                            <Divider className={classes.divider} color="inherit" />
                            <ListItem className={classes.listItem}>FLO</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>GENIE</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>BUGS</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>
                                <IconButton className={classes.closebtn} size="medium"><AppleIcon /></IconButton>
                                APPLE MUSIC</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>
                                <div className={classes.icon}>
                                    <IconButton className={classes.closebtn} size="medium"><ContactlessIcon /></IconButton>
                                    SPOTIFY</div>
                            </ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>AMAZON MUSIC</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem className={classes.listItem}>Album Info</ListItem>
                            <Divider className={classes.divider} />
                        </List>
                    </FormControl>

                </div>
            </Dialog>
            <AppBar position='relative' className={classes.appbarFooter}>
                <Toolbar>
                    <IconButton className={classes.socialBtn} ><TwitterIcon /></IconButton>
                    <IconButton className={classes.socialBtn} ><FacebookIcon /></IconButton>
                    <IconButton className={classes.socialBtn} ><YouTubeIcon /></IconButton>
                    <Typography className={classes.title} />
                    <Typography className={classes.license}>COPYRIGHT © 2020 BIG HIT ENTERTAINMENT ALL RIGHTS RESERVED</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}