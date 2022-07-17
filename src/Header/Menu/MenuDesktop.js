import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DialogUse from '../Dialog/DialogUse';
import DialogAbout from '../Dialog/DialogAbout';
import GAEvent from '../../GAEvent';

import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


class MenuDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            openDialogUse: false,
            openDialogAbout: false
        };
        this.handleOpenDialogUse = this.handleOpenDialogUse.bind(this);
        this.handleCloseDialogUse = this.handleCloseDialogUse.bind(this);
        this.handleOpenDialogAbout = this.handleOpenDialogAbout.bind(this);
        this.handleCloseDialogAbout = this.handleCloseDialogAbout.bind(this);
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


    render() {
        return (
            <Box sx={{ justifyContent: 'flex-end' }}>
                <Stack direction='row' >
                    <Button onClick={ () => {
                        GAEvent('Menu', 'How it works', 'Desktop');
                        this.handleOpenDialogUse();}}
                        startIcon={<SettingsIcon/>} 
                        sx={{ color: 'primary.contrastText' }}>
                        <Typography sx={{ typography: { sm: 'subtitle2', md: 'subtitle1' } }}>How it works</Typography>
                    </Button>
                    <DialogUse 
                    open={this.state.openDialogUse}
                    handleClose={this.handleCloseDialogUse}
                    />
                    <Button onClick={GAEvent('Menu', 'Repo', 'Desktop')}
                    target="_blank" href="https://github.com/Simoniuss/streaming-platforms-analytics" 
                    startIcon={<GitHubIcon/>} sx={{ color: 'primary.contrastText' }}>
                        <Typography sx={{ typography: { sm: 'subtitle2', md: 'subtitle1' } }}>Source code</Typography>
                    </Button>
                    <Button onClick={ () => {
                        GAEvent('Menu', 'About', 'Desktop');
                        this.handleOpenDialogAbout();}}
                        startIcon={<InfoOutlinedIcon/>} 
                        sx={{ color: 'primary.contrastText' }}>
                        <Typography sx={{ typography: { sm: 'subtitle2', md: 'subtitle1' } }}>About me</Typography>
                    </Button>
                    <DialogAbout
                    open={this.state.openDialogAbout}
                    handleClose={this.handleCloseDialogAbout}
                    />
                </Stack>
            </Box>
        );
    }
}

export default MenuDesktop;