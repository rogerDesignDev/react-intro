import React from 'react';
import {
  Box
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },

  list: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
    width: '100%',
  }

 }));

function TodoList(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.list} component={'ul'}>
        {props.children}
      </Box>
    </Box>
  );
}

export { TodoList };
