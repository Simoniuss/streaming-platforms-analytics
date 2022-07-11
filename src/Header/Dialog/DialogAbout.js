import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


class DialogAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'About me',
            content: 'Blablabla'
        }
    }

    render() {
        return (
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}>
                <DialogTitle>
                    <Typography variant="h6"> {this.state.title} </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="body1"> {this.state.content} </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogAbout;