import { FormControl, Grid, InputLabel, List, makeStyles, MenuItem, Select, ListItem, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import _ from 'lodash';
import { tour } from '../tour.js';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
        textAlign:'center'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function TourComponent(params) {
    const classes = useStyles();
    const [value, setValue] = useState(tour[0].name);
    const [albumName, setAlbumName] = useState(tour[0].data);
    const [selectName, setSelectName] = useState(tour[0].data[0].name);
    const [detailData, setDetailData] = useState(tour[0].data[0].details);
    const changeTour = (name) => {
        setValue(name);
        var d = _.map(tour, (t, index) => t.name == value ? t : null);
        setAlbumName(d.data)
    }
    const changeAlbum = (name) => {
        setSelectName(name);
        var data = _.map(albumName, (t, index) => t.name == name ? t : null)
        _.remove(data, (b) => b == null);
        setDetailData(data[0].details)

    }
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ height: '15vh' }}></div>
            <Grid container spacing={1}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            value={value}
                            onChange={(e) => changeTour(e.target.value)}
                        >
                            {_.map(tour, (t, index) => {
                                return <MenuItem style={{textAlign:'center'}} key={index} value={t.name}>
                                    <div style={{textAlign:'center',justifyContent:'center'}}>{t.name}</div>
                                </MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={4} />

            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <img src="/assets/ltour.png" style={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container spacing={1}>

                <Grid item xs={4} />
                <Grid item xs={4}>

                    <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectName}
                            onChange={(e) => { changeAlbum(e.target.value) }}
                        >
                            {_.map(albumName, (t, index) => {
                                console.log(t)
                                return <MenuItem key={index} value={t.name}>{t.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} />

            </Grid>
            <div style={{ height: '15vh' }}></div>
            <List>
                {_.map(detailData, (data, index) => {
                    return <div>
                        <Grid container spacing={1}>

                            <Grid item xs={2} />
                            <Grid item xs={3} >
                                <ListItem style={{fontSize:'20px'}} key={index}>{data.date}</ListItem>
                            </Grid>
                            <Grid item xs={3} >
                                <ListItem style={{fontSize:'20px'}} key={index}>{data.country}<br/>{data.location}</ListItem>
                            </Grid>
                            <Grid item xs={3} >
                                <ListItem style={{fontSize:'20px'}} key={index}>TICKETS</ListItem>
                            </Grid>

                            <Grid item xs={1} />
                            

                        </Grid>
                       
                    </div>

                })}
            </List>
            <div style={{ height: '15vh' }}></div>
        </div>
    )
}