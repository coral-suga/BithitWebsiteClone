import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Dialog, Divider, FormControl, IconButton, List, ListItem, makeStyles, Modal, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
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
        opacity: 50,
        fontSize: 25
    },
    closebtn: {
        color: 'white'
    },
    divider: {
        color: 'white'
    },
    list: {
        textAlign: 'center'
    },
    dialog: {
        opacity: 50,
        position: 'relative'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'
    }
}));
export default function Home(params) {
    const [isOpen, setOpen] = useState(false);
    const classes = styles();
    const modelClose = () => {
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuBtn}
                        color='inherit' aria-label='menu' onClick={(e) => { setOpen(true); e.preventDefault() ;}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} />
                    <Button className={classes.btn} color='inherit' >ENG</Button>
                </Toolbar>
            </AppBar>
            <Dialog fullScreen open={isOpen} onClose={modelClose} className={classes.dialog}>
                <div className={classes.content}>
                    <IconButton className={classes.closebtn} onClick={(e) => { modelClose(); e.preventDefault() }} >
                        <CloseIcon/>
                    </IconButton>
                    <FormControl className={classes.form}>
                        <List>
                            <ListItem className={classes.list}>HOME</ListItem>
                            <Divider className={classes.divider} color="inherit" />
                            <ListItem>BTS</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem>TOMORROW&TOGETHER</ListItem>
                            <Divider className={classes.divider} />
                            <ListItem>LEE HYUN</ListItem>

                        </List>
                    </FormControl>

                </div>
            </Dialog>
        </div >
    )
} 