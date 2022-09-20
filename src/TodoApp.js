import React from "react";
import {ThemeProvider} from '@mui/material/styles'
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import {
  jssPreset,
  StylesProvider
} from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

import HomeView from "./views/home";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <HomeView />
        </StylesProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;