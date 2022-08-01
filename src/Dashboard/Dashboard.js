import React from 'react';
import { csv } from 'd3-fetch';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/InfoOutlined';


import DialogInfo from './VisualizationComponents/DialogInfo';
import ScrollTop from './VisualizationComponents/ScrollTop';
import Treemap from './VisualizationComponents/Treemap';
import Counter from './VisualizationComponents/Counter';
import CounterDialog from './VisualizationComponents/CounterDialog';
import RevenuesLinePlot from './VisualizationComponents/RevenuesLinePlot';
import SubsLinePlot from './VisualizationComponents/SubsLinePlot';
import VoteHistogram from './VisualizationComponents/VoteHistogram';
import HistDialog from  './VisualizationComponents/HistDialog';
import TopTen from './VisualizationComponents/TopTen';


import data from '../data/data.csv';
import revenues from '../data/revenues.csv';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            platform: null,
            type: null,
            genre: null,
            revenues: null,
            openDialogInfo: false,
            openStatInfo: false,
            openHistInfo: false,
            ticks: 10
        };
        this.handleOpenDialogInfo = this.handleOpenDialogInfo.bind(this);
        this.handleCloseDialogInfo = this.handleCloseDialogInfo.bind(this);
        this.handleOpenStatInfo = this.handleOpenStatInfo.bind(this);
        this.handleCloseStatInfo = this.handleCloseStatInfo.bind(this);
        this.handleOpenHistInfo = this.handleOpenHistInfo.bind(this);
        this.handleCloseHistInfo = this.handleCloseHistInfo.bind(this);
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

    loadRevenues = async () => {
        const r = await csv(revenues, function(d) {
            return {
                platform: d.Platform,
                quarter: d.Year+' '+d.Quarter,
                revenue: +d.Revenue,
                subs: +d.Subscriptions
            };
          })
        this.setState({ revenues: r });
        //this.state.revenues? console.log(this.state.revenues[1]) : console.log('no data');
    }

    handleOpenDialogInfo() {
        this.setState({openDialogInfo: true});
    }

    handleCloseDialogInfo() {
        this.setState({openDialogInfo: false});
    }

    handleOpenStatInfo() {
        this.setState({openStatInfo: true});
    }

    handleCloseStatInfo() {
        this.setState({openStatInfo: false});
    }

    handleOpenHistInfo() {
        this.setState({openHistInfo: true});
    }

    handleCloseHistInfo() {
        this.setState({openHistInfo: false});
    }


    componentDidMount() {
        this.loadCSV();
        this.loadRevenues();
    }


    render() {
        return (
            <Container display= 'flex' maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: '100vh'}}>
                <ScrollTop />
                <Grid container spacing={3} flexDirection='row'>

                    {/* Button controller */}
                    <Grid item xs={12}>
                        <Paper sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                            <Stack direction="row" justifyContent="center" alignItems='center' spacing={1}>

                                {/* Platform button */}
                                <FormControl color='background' 
                                sx={{ display: 'flex', m: 1, width: { xs: 80, sm: 150, md: 200 } }}>
                                    <InputLabel> Platform </InputLabel>
                                    <Select
                                    id='select-platform'
                                    label='Platform'
                                    value={this.state.platform? this.state.platform : ''}
                                    onChange={ (event) => {
                                        this.setState({ platform: event.target.value, type: null, genre: null });
                                    }}
                                    >
                                        <MenuItem value={'Netflix'}> Netflix </MenuItem>
                                        <MenuItem value={'Prime'}> Prime Video </MenuItem>
                                        <MenuItem value={'Disney'}> Disney+ </MenuItem>
                                        <MenuItem value={null}> All </MenuItem>
                                    </Select>
                                </FormControl>


                                {/* Type button */}
                                <FormControl color='background'
                                sx={{ display: this.state.platform? 'flex' : 'none', m: 1, width: { xs: 80, sm: 150, md: 200 } }}>
                                    <InputLabel> Type </InputLabel>
                                    <Select
                                    id='select-type'
                                    label='Type'
                                    value={this.state.type? this.state.type : ''}
                                    onChange={ (event) => {
                                        this.setState({ type: event.target.value, genre: null });
                                    }}
                                    >
                                        <MenuItem value={'Movie'}> Movie </MenuItem>
                                        <MenuItem value={'TV Show'}> TV Show </MenuItem>
                                        <MenuItem value={null}> All </MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Genre button */}
                                <FormControl color='background'
                                sx={{ display: this.state.type? 'flex' : 'none', m: 1, width: { xs: 80, sm: 150, md: 200 } }}>
                                    <InputLabel> Genre </InputLabel>
                                    <Select
                                    id='select-genre'
                                    label='Genre'
                                    value={this.state.genre? this.state.genre : ''}
                                    onChange={ (event) => {
                                        this.setState({ genre: event.target.value })
                                    }}
                                    >
                                        <MenuItem value={null}> All </MenuItem>
                                        { this.state.data && this.state.type?
                                            this.state.data.filter(d => d.platform === this.state.platform && d.type === this.state.type)
                                                .map(d => d.genre)
                                                .flat()
                                                .filter((value, index, self) => self.indexOf(value) === index)
                                                .sort()
                                                .map(filteredData => (
                                                    <MenuItem value={filteredData}>
                                                        {filteredData}
                                                    </MenuItem>
                                                ))
                                            : null
                                        }
                                    </Select>
                                </FormControl>

                                {/* Info button */}
                                <IconButton
                                aria-label="info"
                                aria-controls="info-data"
                                aria-haspopup="true"
                                size='large'
                                onClick={this.handleOpenDialogInfo}
                                sx={{ display: this.state.data && this.state.genre? 'flex' : 'none' }}
                                >
                                    <InfoIcon  sx={{ color: 'background.contrastText', fontSize: 25}} />
                                </IconButton>
                                <DialogInfo
                                open={this.state.openDialogInfo}
                                handleClose={this.handleCloseDialogInfo}
                                data={this.state.data}
                                platform={this.state.platform}
                                type={this.state.type}
                                genre={this.state.genre}
                                />
                            </Stack>
                        </Paper>
                    </Grid>
                    


                    {/* Treemap */}
                    <Grid item xs={12} md={8} lg={8}>
                        <Paper 
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                            <Typography variant="h5"> Streaming platforms treemap </Typography>
                            <Treemap data={this.state.data} width={400} height={300} 
                            platform={this.state.platform} type={this.state.type} genre={this.state.genre} />
                        </Paper>
                    </Grid>


                    {/* Statistics */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                            <Stack direction="row" justifyContent="center-end" alignItems='center' spacing={1}>
                            <IconButton
                                aria-label="info-stat"
                                aria-controls="info-data"
                                aria-haspopup="true"
                                size='small'
                                onClick={this.handleOpenStatInfo}
                                >
                                    <InfoIcon  sx={{ color: 'background.contrastText', fontSize: 15}} />
                                </IconButton>
                                <CounterDialog
                                open={this.state.openStatInfo}
                                handleClose={this.handleCloseStatInfo} />
                                <Typography variant="h5"> Statistics </Typography>
                            </Stack>
                            <Counter data={this.state.data} platform={this.state.platform}
                            type={this.state.type} genre={this.state.genre} />
                        </Paper>
                    </Grid>


                    {/* Revenues */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> Revenues </Typography>
                            <RevenuesLinePlot rev={this.state.revenues}
                            width={1000} height={500}  
                            platform={this.state.platform} />
                            <Typography variant="caption" sx={{mt:1}}> *Prime Video revenue includes the entire Amazon Prime subscriptions </Typography>
                        </Paper>
                    </Grid>


                    {/* Subscriptions */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> Subscriptions </Typography>
                            <SubsLinePlot subs={this.state.revenues}
                            width={1000} height={500}  
                            platform={this.state.platform} />
                            <Typography variant="caption" sx={{mt:1}}> *Prime Video releases the number of subscribers only at the end of the year </Typography>
                        </Paper>
                    </Grid>


                    {/* Bins selection */}
                    <Grid item xs={12} md={12} lg={12} sx={{mb:0, pb:0}}>
                        <Paper
                        sx={{
                        p: 0.5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <FormControl>
                                <Stack direction="row" justifyContent="center-end" alignItems='center' spacing={1}>
                                    <IconButton
                                    aria-label="info-stat"
                                    aria-controls="info-data"
                                    aria-haspopup="true"
                                    size='small'
                                    onClick={this.handleOpenHistInfo}
                                    >
                                        <InfoIcon  sx={{ color: 'background.contrastText', fontSize: 15}} />
                                    </IconButton>
                                    <HistDialog
                                    open={this.state.openHistInfo}
                                    handleClose={this.handleCloseHistInfo} />
                                    <FormLabel id="number-of-bins" align='center'> # Histogram bins </FormLabel>
                                </Stack>

                                <RadioGroup
                                row
                                aria-labelledby="number-of-bins"
                                name="row-radio-button"
                                value={this.state.ticks}
                                onChange={ (event) => {
                                    this.setState({ ticks: event.target.value });
                                }}
                                >
                                    <FormControlLabel value={10} control={<Radio />} label="10" />
                                    <FormControlLabel value={20} control={<Radio />} label="20" />
                                    <FormControlLabel value={50} control={<Radio />} label="50" />
                                    <FormControlLabel value={100} control={<Radio />} label="100" />
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>


                    {/* IMDb ratings */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> IMDb ratings </Typography>
                            <VoteHistogram data={this.state.data} width={500} height={500} 
                            platform={this.state.platform} type={this.state.type}
                            genre={this.state.genre} vote='imdb' tick={this.state.ticks}/>
                        </Paper>
                    </Grid>


                    {/* Rotten Tomatoes ratings */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> RottenTomatoes ratings </Typography>
                            <VoteHistogram data={this.state.data} width={500} height={500} 
                            platform={this.state.platform} type={this.state.type}
                            genre={this.state.genre} vote='rt' tick={this.state.ticks} />
                        </Paper>
                    </Grid>

                    {/* Metacritic ratings */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> Metacritic ratings </Typography>
                            <VoteHistogram data={this.state.data} width={500} height={500} 
                            platform={this.state.platform} type={this.state.type}
                            genre={this.state.genre} vote='mc' tick={this.state.ticks} />
                        </Paper>
                    </Grid>


                    {/* Top10 actors */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> Top 10 actors </Typography>
                            <TopTen data={this.state.data} platform={this.state.platform} 
                            type={this.state.type}
                            genre={this.state.genre} actors={true} />
                        </Paper>
                    </Grid>


                    {/* Top10 directors */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper
                        sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                            <Typography variant="h5"> Top 10 directors </Typography>
                            <TopTen data={this.state.data} platform={this.state.platform} 
                            type={this.state.type} genre={this.state.genre} actors={false} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Dashboard;