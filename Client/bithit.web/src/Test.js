import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import withRoot from './components/WithRoot';
import { withRouter } from 'react-router-dom';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
const drawerWidth = 250;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 20, // keep right padding when drawer closed
    },
    toolbarIcon: {
        //backgroundColor: '#19334d',
        height:'20px',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundColor: '#13263a',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        fontSize: 18
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing(2),
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#00264d',
    },
    h4Header: {
        padding: 10,
        //color: '#fff'
    },
    iconButton: {
        backgroundColor: '#001a33'
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: drawerWidth,
        overflowX: 'hidden'
    },
    footerClose: {
        position: 'fixed',
        bottom: 0,
        width: theme.spacing(7),
        overflowX: 'hidden'
    },
    listNoti: {
        width: '100%',
        maxWidth: 360,
        minWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    pinkAvatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        color: '#fff',
        backgroundColor: pink[500],
    },
    customAvator: {
        width: 25,
        height: 25,
        backgroundColor: green[500],
    },
    customIcon: {
        fontSize: 15
    },
    userMenuIcon: {
        marginRight: theme.spacing(2)
    },
    user: {
        cursor: 'pointer'
    }
});
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hubConnection: null,
            openNotification:false,
            anchorEl:null,
            notifications:[],            
            userAnchorEl:null,
            loggedIn:false,
            currentUserName:'',
            openMessage:false,
            message:null,
            messageType:'OK'            
        }
    }
    componentWillUnmount(){
        //unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();        
    }    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuBtton,
                                this.state.opeun && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            id="componentHeader"
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <h4 className={classes.h4Header}>Event Simulator</h4>
                        <IconButton onClick={this.handleDrawerClose} className={classes.iconButton}>
                            <ChevronLeftIcon style={{ color: '#fff' }} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {this.props.children}
                </main>
            </div>
        );
    }
}
Test.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(withRouter(props => <Test  {...props} />)));