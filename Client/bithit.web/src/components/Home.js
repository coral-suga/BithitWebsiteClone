import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Dialog, Divider, FormControl,Grid, IconButton, List, ListItem, makeStyles, Modal, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AlbumSlideShow from './AlbumSlideShow';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import be from '../assets/be.png';
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
    }
}));
export default function Home(params) {
    console.log(params)
    const [isOpen, setOpen] = useState(false);
    const [isMusicChartOpen, setMusicChartOpen] = useState(false);
    const [anchorE1, setAnchorE1] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const open = Boolean(anchorE1)
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
        //setAnchorE1(event.currentTarget)
        setMenuOpen(!isMenuOpen)
    }
    const handleClose = () => {
        setAnchorE1(null);
    }
    return (
        <>
            <AlbumSlideShow onAlbumClick={onAlbumClick} />
            <Dialog fullScreen open={isMusicChartOpen} aria-labelledby="simple-dialog-title"
                onClick={(e) => { albumModelClose(); e.preventDefault(); }}
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
        </>
    )
} 