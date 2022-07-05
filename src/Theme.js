import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#232f3e',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#cb1420'
        },
        background: {
            default: '#F9F2ED',
            paper: '#f3ece6'
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#232f3e',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#cb1420'
        },
        background: {
            default: '#0c0c18',
            paper: '#0e1218'
        },
    },
});

export { lightTheme, darkTheme };