import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './Theme/Theme';
import { CssBaseline } from '@mui/material/';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import logo from './img/sauron.png';
import './css/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		return (
			<React.StrictMode>
				<ThemeProvider theme={this.state.theme}>
      				<CssBaseline/>
      				<Header dark={this.state.isDark} toggle={this.changeColorMode} />
					<div className='App-header'>
						<img src={logo} className="App-logo" alt="logo" />
						<img src={logo} className="App-logo-reverse" alt="logo" />
					</div>
					<Footer />
				</ThemeProvider>
			</React.StrictMode>
		);
	}
}

export default App;
