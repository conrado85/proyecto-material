import { createTheme } from '@mui/material/styles';

// Crea el tema con `palette` y `typography`
const theme = createTheme({
  palette: {
    primary: {
      main: '#f5b7b1 ', // Azul principal
    },
    secondary: {
      main: '#dc004e', // Rojo secundario
    },
    background: {
      default: '#eaeded', // Fondo predeterminado
    },
    text: {
      primary: '#000000', // Texto principal
      secondary: '#555555', // Texto secundario
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Arial", sans-serif', // Fuente predeterminada
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#555',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#666',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#888',
    },
  },
});

export default theme;
