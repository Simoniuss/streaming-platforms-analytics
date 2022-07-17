import React from 'react';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


class TopTen extends React.Component {

    render() {
        var counts = {}

        if (this.props.data) {
            this.props.data.filter(d => this.props.platform ? d.platform === this.props.platform : true)
                .filter(d => this.props.type ? d.type === this.props.type : true)
                .filter(d => this.props.genre ? d.genre.includes(this.props.genre) : true)
                .map(d => this.props.actors? d.actors : d.director)
                .flat()
                .forEach( d => counts.hasOwnProperty(d)? counts[d]++ : counts[d] = 1)
        }

        var topTen = Object.entries(counts)
            .sort(function(a, b) { return b[1] - a[1] })
            .slice(0, 10)

        //console.log(topTen)

        return (
            <TableContainer>
                {topTen?
                    <Table size='small' aria-label="top10-table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"> 
                                    {this.props.actors? 'Actor' : 'Director' } 
                                </TableCell>
                                <TableCell align="left"> 
                                    {this.props.type? this.props.type : 'Movie/TV Show'} 
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {topTen.map((row, i) => (
                                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="left">
                                        {row[0]}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                : <Typography variant="h6">No data available</Typography>
                }
            </TableContainer>
        );
    }
}

export default TopTen;