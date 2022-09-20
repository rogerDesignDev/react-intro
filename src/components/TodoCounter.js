import React, { useContext } from 'react';
import {
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

import { TodoContext } from 'src/context';

const useStyles = makeStyles((theme) => ({
  root : {
    display: 'flex',
    fontSize: '1.5rem',
    lineHeight: '2.4rem',
    marginBottom: '2.4rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
      marginBottom: '3rem',
    },
  }
}));

const TodoCounter = () => {
  const classes = useStyles();

  const {
    totalTodos,
    completedTodos,
  } = useContext(TodoContext);

  return (
    <Typography className={classes.root} component={'h2'}>
      Has completado {completedTodos} de {totalTodos} Tarea{totalTodos > 1 ? 's' : '' }
    </Typography>
  );
}

export { TodoCounter };