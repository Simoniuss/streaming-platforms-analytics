import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer>
                <Box sx={{ display: 'flex',
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                alignContent: 'center', 
                flexGrows: 1,
                bgcolor: 'background.paper',
                color: 'background.contrastText',
                px: 2, py: 0}}>
                    <Box>
                        <Typography variant='caption'>Copyright &copy;2022 All rights reserved.</Typography>
                    </Box>
                    <Stack direction='row'>
                        <Link href='https://www.linkedin.com/in/simonebaccile' target='_blank' >
                            <LinkedInIcon sx={{ color: 'background.contrastText', m: 0.5, fontSize: 30 }}/>
                        </Link>
                        <Link href='https://github.com/Simoniuss' target='_blank'>
                            <GitHubIcon sx={{ color: 'background.contrastText', m: 0.5, fontSize: 30 }}/>
                        </Link>
                    </Stack>
                </Box>
            </footer>
        );
    }
}

export default Footer;