import React from 'react';

import Typography from '@mui/material/Typography';
import InsightsIcon from '@mui/icons-material/Insights';


class LogoDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Streaming Platform Analytics' }
    }

    render() {
        return (
            <React.Fragment>
                <InsightsIcon sx={{ fontSize: 50, my:1, mr: 2 }}/>
                <Typography variant="h5" 
                component="a" 
                href="/"
                sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
                    {this.state.title}
                </Typography>
            </React.Fragment>
        );
    }
}

export default LogoDesktop;