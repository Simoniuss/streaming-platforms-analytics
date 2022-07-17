import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import CloseIcon from '@mui/icons-material/Close';

class DialogUse extends React.Component {
    render() {
        return (
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}>
                <DialogTitle>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant="h5"> How it works </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={this.props.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="body2"> This website is the implementation of the project for the exam of Scientific and Large Data Visualization, at the University of Pisa (a.y. 2021/2022). 
                        It contains different data visualization made with <a href='https://d3js.org/' color='white'>D3js</a> to analyze and compare different streaming platforms: Netflix, Prime Video and Disney+.</Typography>
                        <Typography variant="body2"> The data the data has been integrated with <a href='https://www.omdbapi.com/'>OMDb API</a> to get more informations about movies and tv series. </Typography>
                        <Typography variant="body2"> The visualizations in this site are the following: </Typography>
                        <Typography variant="body2"> 1. <b>Treemap</b>: data grouped by the number of movies and tv shows. </Typography>
                        <Typography variant="body2"> 2. <b>Statistics</b>: some statistics about the number of movies, their average runtime or seasons. </Typography>
                        <Typography variant="body2"> 3. <b>Lineplot</b>: two lineplot which describe the revenues and the number of subscribers through years from 2018. </Typography>
                        <Typography variant="body2"> 4. <b>Histogram</b>: Histograms of rating assigned to film from <a href='https://www.imdb.com/'>IMDb</a>, <a href='https://www.rottentomatoes.com/'>Rotten Tomatoes</a>, and <a href='https://www.metacritic.com/'>Metacritic</a>. </Typography>
                        <Typography variant="body2"> 5. <b>Top10</b>: Top 10 of actors and directors, by the number of movies or TV shows. </Typography>
                        <Typography variant="body2"> All the visualizations can be filtered using the button at the beginning of the page. You can select the platform, the type (Movie/TV Show) and the genre of content. </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogUse;