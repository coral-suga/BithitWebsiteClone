import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme=createMuiTheme({
    typography:{
        useNextVariants: true,
        htmlFontSize: 10,
        fontSize: 10,
    }
})
export default function WithRoot(Component){
    function WithRoot(props){
        return <MuiThemeProvider>
            <CssBaseline/>
            <Component {...props}/>
        </MuiThemeProvider>
    }
    return WithRoot;
}