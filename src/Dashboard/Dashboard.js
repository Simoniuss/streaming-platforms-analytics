import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//import GAEvent from '../GAEvent';

import logo from '../img/sauron.png';
import '../css/App.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container display= 'flex' flexDirection='column' maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: '100vh'}}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        }}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        }}>
                            <img src={logo} className="App-logo-reverse" alt="logo" width='400' />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        }}>
                            <img src={logo} className="App-logo" alt="logo"/>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        }}>
                            <img src={logo} className="App-logo-reverse" alt="logo" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Dashboard;