import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
          backgroundColor: "#abb4db",
          borderColor: "blue",
        }
      }
    },
    MuiInputLabel:{
      styleOverrides:{ 
        root:{
          color:"white",
        }
      }
    }
  },
  palette: {
    neutral:{
      main:"#7b3a8a"
    }
  },
  typography: {
    myVariant: {
      color: "#cccccc"
    },
    lightVariant: {
      color: "#abb4db",
      fontSize: "18px",
      fontWeight: "600",
      fontFamily: "montserrat"
    }
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

