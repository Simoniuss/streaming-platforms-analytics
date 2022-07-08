import React from 'react';
import ReactGA from 'react-ga';


import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { lightTheme, darkTheme} from './Theme/Theme';
import { CssBaseline } from '@mui/material/';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
//import './css/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trackingID: 'UA-233892080-1',
			isDark: !window.matchMedia('(prefers-color-scheme: light)').matches,	// true when dark mode or no-preference
			theme: 'darkTheme'
		}
	}

	componentWillMount() {
		this.state.isDark ? 
		this.setState({theme: darkTheme}) : 
		this.setState({theme: lightTheme});
	 }

	changeColorMode = () => {
		if (this.state.isDark) {
			this.setState({
				isDark: false,
				theme: lightTheme
			})
		}
		else {
			this.setState({
				isDark: true,
				theme: darkTheme
			})
		}
	}

	render() {
		ReactGA.initialize(this.state.trackingID);
		ReactGA.pageview(window.location.pathname + window.location.search);
		return (
			<React.StrictMode>
				<ThemeProvider theme={responsiveFontSizes(this.state.theme)}>
      				<CssBaseline/>
      				<Header dark={this.state.isDark} toggle={this.changeColorMode} />
					<Dashboard />
					<Footer />
				</ThemeProvider>
			</React.StrictMode>
		);
	}
}

export default App;
