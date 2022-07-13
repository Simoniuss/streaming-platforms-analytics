import React, { Suspense } from 'react';
import { csv } from 'd3-fetch';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
//import GAEvent from '../GAEvent';

import data from '../data/data.csv';
import logo from '../img/sauron.png';
import '../css/App.css';

const Treemap = React.lazy(() => import('./VisualizationComponents/Treemap'));

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }


    // TODO: write a function for the replacing, tried but doesn't work.
    loadCSV = async () => {
        const d = await csv(data, function(d) {
            return {
                title: d.Title,
                type: d.Type,
                director: d.Director? (d.Director).replace(/\[|\]|'/g,'').split(', ') : [],
                actors: d.Actors? (d.Actors).replace(/\[|\]|'/g,'').split(', ') : [],
                release: d.Release? new Date(d.Release).toLocaleDateString('it-IT') : null,
                genre: d.Genre? (d.Genre).replace(/\[|\]|'/g,'').split(', ') : [],
                runtime: +d.Runtime,
                language: d.Language? (d.Language).replace(/\[|\]|'/g,'').split(', ') : [],
                country: d.Country? (d.Country).replace(/\[|\]|'/g,'').split(', ') : [],
                rating: d.Rating? d.Rating : null,
                imdb: +d.IMDb,
                rt: +d.RottenTomatoes,
                mc: +d.Metacritic,
                platform: d.Platform
            };
          })
        this.setState({ data: d });
        //this.state.data? console.log(this.state.data[1]) : console.log('no data');
    }

    componentDidMount() {
        this.loadCSV();
    }


    render() {
        return (
            <Container display= 'flex' maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: '100vh'}}>
                <Grid container spacing={3} flexDirection='row'>
                    <Grid item xs={12} md={10} lg={10}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                            <Suspense fallback={<CircularProgress sx={{ color: 'secondary.main' }} />}>
                                <Treemap data={this.state.data} width={800} height={800} />
                            </Suspense>
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