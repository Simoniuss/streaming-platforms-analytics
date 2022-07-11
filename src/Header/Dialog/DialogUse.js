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
                        <Typography variant="body1"> This website is the implementation of the project for the exam of Scientific and Large Data Visualization, at the University of Pisa (a.y. 2021/2022). 
                        It contains different data visualization made with <a href='https://d3js.org/' color='white'>D3js</a> to analyze and compare different streaming platforms: Netflix, Prime Video and Disney+.</Typography>
                        <Typography variant="body1"> The data the data has been integrated with <a href='https://www.omdbapi.com/'>OMDb API</a> to get more informations about movies and tv series. </Typography>
                        <Typography variant="body1"> The visualizations in this site are the following: </Typography>
                        <Typography variant="body1"> 1. <b>Title</b>: description </Typography>
                        <Typography variant="body1"> 2. <b>Title</b>: description </Typography>
                        <Typography variant="body1"> 3. <b>Title</b>: description </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogUse;