import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './Theme';
import { CssBaseline } from '@mui/material/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
