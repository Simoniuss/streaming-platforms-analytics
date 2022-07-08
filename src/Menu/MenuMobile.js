import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DialogUse from '../Dialog/DialogUse';
import DialogAbout from '../Dialog/DialogAbout';

import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';


class MenuMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            anchorEl: null, 
            openDialogUse: false,
            openDialogAbout: false
        };
        this.handleOpenDialogUse = this.handleOpenDialogUse.bind(this);
        this.handleCloseDialogUse = this.handleCloseDialogUse.bind(this);
        this.handleOpenDialogAbout = this.handleOpenDialogAbout.bind(this);
        this.handleCloseDialogAbout = this.handleCloseDialogAbout.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    handleOpenDialogUse() {
        this.setState({openDialogUse: true});
    }

    handleCloseDialogUse() {
        this.setState({openDialogUse: false});
    }

    handleOpenDialogAbout() {
        this.setState({openDialogAbout: true});
    }

    handleCloseDialogAbout() {
        this.setState({openDialogAbout: false});
    }

    handleOpenMenu(event) {
        this.setState({anchorEl: event.currentTarget});
    }
    
    handleCloseMenu() {
        this.setState({anchorEl: null});
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-start'}}>
                <IconButton
                aria-label="menu"
                aria-controls="menu-mobile"
                aria-haspopup="true"
                onClick={this.handleOpenMenu}
                sx={{ color: 'primary.contrastText'}}>
                    <MenuIcon/>
                </IconButton>
                <Menu
                id="menu-mobile"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleCloseMenu}
                >
                    <MenuItem onClick={() => {
                        this.handleCloseMenu();
                        this.handleOpenDialogUse();
                    }}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <Typography variant="subtitle2">How it works</Typography>
                    </MenuItem>
                    <DialogUse
                    open={this.state.openDialogUse}
                    handleClose={this.handleCloseDialogUse}
                    />
                <MenuItem 
                onClick={this.handleCloseMenu}
                href="https://github.com/Simoniuss/streaming-platforms-analytics"
                target="_blank"
                component="a"
                >
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle2">Source code</Typography>
                </MenuItem>
                <MenuItem onClick={() => {
                    this.handleCloseMenu();
                    this.handleOpenDialogAbout();
                    }}>
                    <ListItemIcon>
                        <InfoOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="subtitle2">About me</Typography>
                </MenuItem>
                <DialogAbout
                open={this.state.openDialogAbout}
                handleClose={this.handleCloseDialogAbout}
                />
            </Menu>
        </Box>
        );
    }
}

export default MenuMobile;