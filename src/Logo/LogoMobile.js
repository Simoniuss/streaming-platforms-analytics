import React from 'react';

import Typography from '@mui/material/Typography';
import InsightsIcon from '@mui/icons-material/Insights';
import Box from '@mui/material/Box';


class LogoMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Streaming Platform Analytics' }
    }

    render() {
        return (
            <Box sx={{ display: 'flex', 
            jutifyContent: 'center', 
            alignItems: 'center', 
            alignContent: 'center', 
            flexGrows: 1 }}>
                <InsightsIcon sx={{ display: { xs: 'none', sm: 'block' }, 
                fontSize: 25, my:1, mr: 1 }} />
                <Typography variant='h5'
                component="a" 
                href={process.env.PUBLIC_URL + '/'}
                sx={{ color: 'inherit', textDecoration: 'none', textAlign: 'center', mr: 0 }}>
                    {this.state.title}
                </Typography>
            </Box>
        );
    }
}

export default LogoMobile;