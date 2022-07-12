import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import LogoDesktop from './Logo/LogoDesktop';
import LogoMobile from './Logo/LogoMobile';
import MenuDesktop from './Menu/MenuDesktop';
import MenuMobile from './Menu/MenuMobile';
import GAEvent from '../GAEvent';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileView: window.innerWidth < 900
        };
        this.displayMobile = this.displayMobile.bind(this);
        this.displayDesktop = this.displayDesktop.bind(this);
    }

    setResponsiveness = () => {
        if(window.innerWidth < 900) {
            this.setState({mobileView:true});
        }
        else {
            this.setState({mobileView:false})
        }
    }

    componentDidMount() {
       window.addEventListener('resize', this.setResponsiveness);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setResponsiveness);
    }


    displayDesktop() {
        return (
            <Toolbar>
                <LogoDesktop />
                <MenuDesktop />
                <IconButton onClick={ () => {
                    GAEvent('Header', 'Dark', this.props.dark.toString());
                    this.props.toggle();}}>
                    {this.props.dark ? <DarkModeIcon fontSize='medium'/> : <LightModeIcon fontSize='medium' sx={{ color: 'primary.contrastText' }}/>}
                </IconButton>
            </Toolbar>
        )      
    }

    displayMobile() {
        return (
            <Toolbar>
                <MenuMobile />
                <LogoMobile />
                <IconButton onClick={ () => {
                    GAEvent('Header', 'Dark', this.props.dark.toString());
                    this.props.toggle();}}
                     sx={{ flexGrow: 1, justifyContent: 'flex-end'}}>
                    {this.props.dark ? <DarkModeIcon fontSize='small'/> : <LightModeIcon fontSize='small' sx={{ color: 'primary.contrastText' }}/>}
                </IconButton>
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