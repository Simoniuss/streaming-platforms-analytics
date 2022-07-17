import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#344458',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#cb1420'
        },
        background: {
            default: '#ffffff',
            paper: '#e7ded6',
            contrastText: '#0c0c18'
        },
    },
    typography: {
        fontFamily: [
            'Roboto Mono',
            'Space Mono',
            'Helvetica Neue',
            'Arial',
            'sans-serif'
        ].join(','),
        fontSize: 12,
        button: {
            textTransform: 'none'
        }
    },
    spacing: 10
});


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1b2531',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#cb1420'
        },
        background: {
            default: '#141e21',
            paper: '#031f2a',
            contrastText: '#ffffff'
        },
    },
    typography: {
        fontFamily: [
            'Roboto Mono',
            'Space Mono',
            'Helvetica Neue',
            'Arial',
            'sans-serif'
        ].join(','),
        fontSize: 12,
        button: {
            textTransform: 'none'
        }
    },
    spacing: 10
});

export { lightTheme, darkTheme };