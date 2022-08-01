import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import CloseIcon from '@mui/icons-material/Close';


class HistDialog extends React.Component {

    render() {
        return (
            <Dialog open={this.props.open}
            onClose={this.props.handleClose}>
                <DialogTitle>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="h6"> Info </Typography>
                        <IconButton
                        aria-label="close"
                        onClick={this.props.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1"> You can modify the number of bins of histograms below. </Typography>
                    <Typography variant="body1"> IMDb has votes from 0 to 10. </Typography>
                    <Typography variant="body1"> RottenTomatoes has votes in percentage (%). </Typography>
                    <Typography variant="body1"> Metacritic has votes from 0 to 100. </Typography>
                </DialogContent>
            </Dialog>
        );
    }
}

export default HistDialog;