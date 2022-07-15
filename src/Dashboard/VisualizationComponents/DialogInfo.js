import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CloseIcon from '@mui/icons-material/Close';


class DialogInfo extends React.Component {

    render() {
        return (
            <Dialog fullScreen
            open={this.props.open}
            onClose={this.props.handleClose}>
                <DialogTitle>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="h5"> List of selected movies/TV shows </Typography>
                        <IconButton
                        aria-label="close"
                        onClick={this.props.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    {this.props.data?
                    <TableContainer component={Paper}>
                        <Table aria-label="info-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Platform</TableCell>
                                    <TableCell align="left">Type</TableCell>
                                    <TableCell align="left">Title</TableCell>
                                    <TableCell align="left">Genre</TableCell>
                                    <TableCell align="left">Year</TableCell>
                                    <TableCell align="left">Director</TableCell>
                                    <TableCell align="left">Cast</TableCell>
                                    <TableCell align="left">Runtime/Season</TableCell>
                                    <TableCell align="left">IMDb</TableCell>
                                    <TableCell align="left">RottenTomatoes</TableCell>
                                    <TableCell align="left">Metacritic</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.props.data.filter(d => this.props.platform? d.platform === this.props.platform : true)
                                .filter(d => this.props.type? d.type === this.props.type : true)
                                .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
                                .sort(function(a,b) { return ('' + a.title).localeCompare(b.title);})
                                .map((row) => (
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="left">
                                        {row.platform}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.type}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="left">
                                        <List>
                                            {row.genre.map((item) => (
                                            <ListItem sx={{p: 0}}>{item}</ListItem>
                                            ))}
                                        </List>
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.release}
                                    </TableCell>
                                    <TableCell align="left">
                                        <List>
                                            {row.director.map((item) => (
                                            <ListItem sx={{p: 0}}>{item}</ListItem>
                                            ))}
                                        </List>
                                    </TableCell>
                                    <TableCell align="left">
                                        <List>
                                            {row.actors.map((item) => (
                                            <ListItem sx={{p: 0}}>{item}</ListItem>
                                            ))}
                                        </List>
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.runtime}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.imdb === 0 ? 'N/A' : row.imdb+'/10'}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.rt === 0 ? 'N/A' : row.rt+'%'}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.mc === 0 ? 'N/A' : row.mc+'/100'}
                                    </TableCell>
                                </TableRow>
                                ))
                            }
                            </TableBody>
                        </Table>
                  </TableContainer>
                    : <Typography variant="h6"> No data </Typography>}
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogInfo;