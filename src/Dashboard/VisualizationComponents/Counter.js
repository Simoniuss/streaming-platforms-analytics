import React from 'react';

import Typography from '@mui/material/Typography';


class Counter extends React.Component {

    render() {
        const data = this.props.data?
            this.props.data.filter(d => this.props.platform? d.platform === this.props.platform : true)
            : []

        const runtime = this.props.type?  
            this.props.type === 'Movie'?
                data.filter(d => this.props.type? d.type === this.props.type : true)
                    .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
                    .reduce((acc, cur) => cur.runtime? acc + cur.runtime : acc, 0)
                : 0 // if type is TV show, runtime is 0
            : data.filter(d => d.type === 'Movie')
                .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
                .reduce((acc, cur) => cur.runtime? acc + cur.runtime : acc, 0) // all or only platform selected

        const season = this.props.type? 
            this.props.type === 'TV Show'?
                data.filter(d => this.props.type? d.type === this.props.type : true)
                    .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
                    .reduce((acc, cur) => cur.runtime? acc + cur.runtime : acc, 0)
                : 0 // if type is Movie, season is 0
            : data.filter(d => d.type === 'TV Show')
                .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
                .reduce((acc, cur) => cur.runtime? acc + cur.runtime : acc, 0) // all or only platform selected

        const count = data.filter(d => this.props.type? d.type === this.props.type : true)
            .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)
            .length

        return (
            <React.Fragment>

                <Typography variant="body2"
                sx={{ display: this.props.platform && !this.props.type && !this.props.genre? 'flex' : 'none' }}>
                    / {this.props.platform}
                </Typography>

                <Typography variant="body2"
                sx={{ display: this.props.platform && this.props.type && !this.props.genre? 'flex' : 'none' }}>
                    / {this.props.platform} / {this.props.type}
                </Typography>

                <Typography variant="body2"
                sx={{ display: this.props.platform && this.props.type && this.props.genre? 'flex' : 'none' }}>
                    / {this.props.platform} / {this.props.type} / {this.props.genre} 
                </Typography>

                <Typography variant="body1">
                    Total: {count} 
                </Typography>

                <Typography variant="body1" 
                sx={{ display: this.props.type === 'TV Show' ? 'none' : 'flex' }}> 
                    Average runtime: {(runtime/count).toFixed(2)} minutes 
                </Typography>

                <Typography variant="body1" 
                sx={{ display: this.props.type === 'Movie' ? 'none' : 'flex' }}> 
                    Average season: {(season/count).toFixed(2)} season
                </Typography>

            </React.Fragment>
        );
    }
}

export default Counter;