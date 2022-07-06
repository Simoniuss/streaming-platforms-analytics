import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileView: window.innerWidth < 600, 
            anchorElNav: null, 
            useDialog: false,
            infoDialog: false
        };
        this.displayMobile = this.displayMobile.bind(this);
        this.displayDesktop = this.displayDesktop.bind(this);
        this.handleOpenDialogUse = this.handleOpenDialogUse.bind(this);
        this.handleCloseDialogUse = this.handleCloseDialogUse.bind(this);
        this.handleOpenDialogInfo = this.handleOpenDialogInfo.bind(this);
        this.handleCloseDialogInfo = this.handleCloseDialogInfo.bind(this);
        this.handleOpenMenuMobile = this.handleOpenMenuMobile.bind(this);
        this.handleCloseMenuMobile = this.handleCloseMenuMobile.bind(this);
    }

    setResponsiveness = () => {
        if(window.innerWidth < 600) {
            this.setState({mobileView:true});
        }
        else {
            this.setState({mobileView:false})
        }
    }

    componentWillMount() {
       window.addEventListener('resize', this.setResponsiveness);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setResponsiveness);
    }

    handleOpenDialogUse() {
        this.setState({useDialog: true});
    }

    handleCloseDialogUse() {
        this.setState({useDialog: false});
    }

    handleOpenDialogInfo() {
        this.setState({infoDialog: true});
    }

    handleCloseDialogInfo() {
        this.setState({infoDialog: false});
    }

    displayDesktop() {
        return (
            <Toolbar>
                <InsightsIcon sx={{ fontSize: 50, my:1, mr: 2 }}/>
                <Typography variant="h5" 
                component="a" 
                href="/"
                sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1}}>
                    Streaming Platform Analytics
                </Typography>
                <Box sx={{ justifyContent: 'flex-end'}}>
                    <Stack direction='row' spacing={1}>
                        <Button onClick={this.handleOpenDialogUse} startIcon={<SettingsIcon/>} sx={{ color: 'primary.contrastText' }}>
                            <Typography variant="subtitle1">How it works</Typography>
                        </Button>
                        <Dialog
                        open={this.state.useDialog}
                        onClose={this.handleCloseDialogUse}>
                            <DialogTitle>
                                <Typography variant="h6">How it works</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Typography variant="body1"> Blablabla </Typography>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                        <Button target="_blank" href="https://github.com/Simoniuss/streaming-platforms-analytics" startIcon={<GitHubIcon/>} sx={{ color: 'primary.contrastText' }}>
                            <Typography variant="subtitle1">Source code</Typography>
                        </Button>
                        <Button onClick={this.handleOpenDialogInfo} startIcon={<InfoOutlinedIcon/>} sx={{ color: 'primary.contrastText' }}>
                            <Typography variant="subtitle1">About me</Typography>
                        </Button>
                        <Dialog
                        open={this.state.infoDialog}
                        onClose={this.handleCloseDialogInfo}>
                            <DialogTitle>
                                <Typography variant="h6">About me</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Typography variant="body1"> Blablabla </Typography>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </Stack>
                </Box>
            </Toolbar>
        )      
    }

    handleOpenMenuMobile(event) {
        this.setState({anchorElNav: event.currentTarget});
    }
    
    handleCloseMenuMobile() {
        this.setState({anchorElNav: null});
    }

    displayMobile() {
        return (
            <Toolbar>
                <InsightsIcon sx={{ fontSize: 25, my:1, mr: 1 }}/>
                <Typography variant="subtitle1" 
                component="a" 
                href="/"
                sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1}}>
                    Streaming Platform Analytics
                </Typography>
                <Box sx={{ justifyContent: 'flex-end'}}>
                    <IconButton
                    aria-label="menu"
                    aria-controls="menu-mobile"
                    aria-haspopup="true"
                    onClick={this.handleOpenMenuMobile}
                    sx={{ color: 'primary.contrastText'}}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                    id="menu-mobile"
                    anchorEl={this.state.anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(this.state.anchorElNav)}
                    onClose={this.handleCloseMenuMobile}
                    >
                        <MenuItem onClick={() => {
                            this.handleCloseMenuMobile();
                            this.handleOpenDialogUse();
                            }}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <Typography variant="subtitle2">How it works</Typography>
                        </MenuItem>
                        <Dialog
                        open={this.state.useDialog}
                        onClose={this.handleCloseDialogUse}>
                            <DialogTitle>
                                <Typography variant="h6">How it works</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Typography variant="body1"> Blablabla </Typography>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                        <MenuItem 
                        onClick={this.handleCloseMenuMobile}
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
                            this.handleCloseMenuMobile();
                            this.handleOpenDialogInfo();
                            }}>
                            <ListItemIcon>
                                <InfoOutlinedIcon />
                            </ListItemIcon>
                            <Typography variant="subtitle2">About me</Typography>
                        </MenuItem>
                        <Dialog
                        open={this.state.infoDialog}
                        onClose={this.handleCloseDialogInfo}>
                            <DialogTitle>
                                <Typography variant="h6">About me</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Typography variant="body1"> Blablabla </Typography>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </Menu>
                </Box>
            </Toolbar>
        )
    }

    render() {
        return (
            <AppBar position="sticky">
                {this.state.mobileView ? this.displayMobile() : this.displayDesktop()}
            </AppBar>
        );
    }
}

export default Header;