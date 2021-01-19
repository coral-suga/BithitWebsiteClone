import React, { useState } from 'react';
import { ClickAwayListener, Divider, Drawer, Menu, MenuItem, Modal, Paper } from "@material-ui/core";

export default function MenuList(params) {

    return (

        <Paper>
            <ClickAwayListener onClickAway={params.handleClose}>
                <Menu anchorEl={params.anchorE1} open={params.open} onClose={params.handleClose}>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>PROFILE</MenuItem>
                    <MenuItem>DISCOGRAPHY</MenuItem>
                    <MenuItem>SCHEDULE</MenuItem>
                    <MenuItem>TOUR</MenuItem>
                </Menu>
            </ClickAwayListener>
        </Paper>
    )
}