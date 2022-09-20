import React from "react";
import {
  Box
} from "@mui/material";
import { makeStyles } from '@mui/styles';

import { Header } from "src/components/Header";
import { TodoProvider } from "src/context";
import { Content } from "./content";
import { Footer } from "src/components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
 }));

function HomeView() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />

      <TodoProvider>
        <Content />
      </TodoProvider>

      <Footer />
    </Box>
  );
}

export default HomeView;