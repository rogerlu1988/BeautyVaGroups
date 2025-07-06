import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
    accent: {
      main: '#e60023',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#222',
    },
  },
  typography: {
    fontFamily: 'Montserrat, ui-sans-serif, system-ui',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': { backgroundColor: '#222' },
        },
        containedSecondary: {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
