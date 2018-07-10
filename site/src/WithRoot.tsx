import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary:{
        contrastText: '#FFFFFF',
        dark: '#01579B',      
        light: '#40C4FF',
        main: '#2196f3',          
      },
      secondary: {
        contrastText: '#26C9FF',
        dark: '#C51162',      
        light: '#EC407A',
        main: '#FF4081',  
      }       
    },
  });
  function withRoot(Component: React.ComponentType) {
    function WithRoot(props: object) {
      // MuiThemeProvider makes the theme available down the React tree
      // thanks to React context.
      return (
        <MuiThemeProvider theme={theme}>       
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      );
    }
    return WithRoot;
  }  
  export default withRoot;