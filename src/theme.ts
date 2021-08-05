import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#3981F7',
    },
    success:{
      main:"#5DAE49"
    },
    warning:{
      main:"#FFC620"
    },
    error: {
      main: red.A400,
    },
    background:{
      default:"#F1F3F4",
      paper:"#fff"
    }
  },
  typography:{
    fontFamily:'Nunito Sans'
  },
  shape:{
    borderRadius:5
  }
});

export default theme;
