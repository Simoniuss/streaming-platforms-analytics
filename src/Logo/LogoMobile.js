import React from 'react';

import Typography from '@mui/material/Typography';
import InsightsIcon from '@mui/icons-material/Insights';


class LogoMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Streaming Platform Analytics' }
    }

    render() {
        return (
            <React.Fragment>
                <InsightsIcon sx={{ fontSize: 25, my:1, mr: 1 }} />
                <Typography variant="subtitle1" 
                component="a" 
                href={process.env.PUBLIC_URL + '/'}
                sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1}}>
                    {this.state.title}
                </Typography>
            </React.Fragment>
        );
    }
}

export default LogoMobile;