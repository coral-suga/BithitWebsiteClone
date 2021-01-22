import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Schedule(params) {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <div style={{ backgroundColor: '#353332' }}>
            <div style={{ height: '5vh' }}></div>
                <Grid container spacing={1}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <img style={{ width: '100%' }} src="/assets/schedule.jpg" />
                        <Grid container spacing={1}>
                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <Calendar
                                    style={{ width: '100%', height: "200vh" }}
                                    onChange={onChange}
                                    value={value}
                                />
                            </Grid>
                            <Grid item xs={4} />

                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <div style={{ height: '5vh' }}></div>
            </div>
        </>
    );
}