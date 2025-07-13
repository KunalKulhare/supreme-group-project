import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00AEEF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

export default theme;