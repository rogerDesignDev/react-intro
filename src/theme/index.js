import {createTheme} from "@mui/material/styles";
import globalVars from 'src/theme/globalVars.module.scss';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        html: {
          fontSize: '62.5%',
        },
        body: {
          color: globalVars.black,
          fontSize: '1.5rem',
          lineHeight: '2.4rem',
        },
      }),
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  typography: {
    body1: {
      fontSize: '1.5rem',
      lineHeight: '2.4rem',
    }
  },
});

export default theme