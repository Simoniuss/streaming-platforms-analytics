import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import CloseIcon from '@mui/icons-material/Close';


class CounterDialog extends React.Component {

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
                    <Typography variant="body1"> Total: the number of selected movies/TV shows. </Typography>
                    <Typography variant="body1"> Average runtime: the mean runtime of selected movies. </Typography>
                    <Typography variant="body1"> Average season: the mean between the number of selected TV show. </Typography>
                </DialogContent>
            </Dialog>
        );
    }
}

export default CounterDialog;