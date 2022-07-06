import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './Theme';
import { CssBaseline } from '@mui/material/';
import Header from './Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
