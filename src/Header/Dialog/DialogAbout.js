import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import GAEvent from '../../GAEvent';

import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


class DialogAbout extends React.Component {
    render() {
        return (
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}>
                <DialogTitle>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="h5"> About me </Typography>
                        <IconButton
                        aria-label="close"
                        onClick={this.props.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="body1" fontWeight='bold'> Hi, I'm Simone! &#129446; </Typography>
                        <Typography variant="body1"> I'm 24 years old and I'm from Abruzzo (Italy) &#9968;&#65039;, the homeland of <i>Arrosticini</i> &#128017;. </Typography>
                        <Typography variant="body1"> Currently, I'm a master's student in computer science at the University of Pisa, with a curricula in Data & Knowledge &#128104;&#127995;&#8205;&#128187;. </Typography>
                        <Typography variant="body1"> I really like programming, especially the design phase where you have to understand how to fit all the pieces, like a puzzle &#129513;. </Typography>
                        <Typography variant="body1"> I love to read any kind of book (now I'm crazy about Murakami) &#128218;, and as you can see from this site I love to watch movies and tv series &#127916;. </Typography>
                        <Typography variant="body1"> If you liked the site, and would like to give me some feedback, or just to have a chat, you can contact me: </Typography>
                    </DialogContentText>
                    <Stack direction='row'>
                        <Link onClick={GAEvent('About', 'Facebook', '')}
                         href='https://www.facebook.com/simone.baccile' target='_blank' >
                            <FacebookIcon sx={{ color: 'background.contrastText', m: 0.5, fontSize: 30 }}/>
                        </Link>
                        <Link onClick={GAEvent('About', 'Instagram', '')} 
                        href='https://www.instagram.com/simonebaccile/' target='_blank'>
                            <InstagramIcon sx={{ color: 'background.contrastText', m: 0.5, fontSize: 30 }}/>
                        </Link>
                    </Stack>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogAbout;