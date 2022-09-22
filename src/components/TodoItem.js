import React from 'react';
import {
  Box,
  Typography,
  alpha,
  IconButton,
  ButtonBase,
  Skeleton,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import { IconCheckbox } from './icons/IconCheckbox';
import { IconCheckboxChecked } from './icons/IconCheckboxChecked';
import { IconDelete } from './icons/IconDelete';

const useStyles = makeStyles((theme) => ({
  item: {
    alignItems: 'center',
    backgroundPosition: '90% bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    border: '.1rem solid' + globalVars.gray,
    borderRadius: globalVars.borderRadius,
    boxShadow: `0 .2rem 2rem ${alpha(globalVars.black, .1)}`,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2.4rem',
    padding: '2.5rem 2rem',
    transition: theme.transitions.create(['border-color']),
    width: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      borderColor: globalVars.purple,
    }
  },

  itemCompleted: {
    borderColor: globalVars.success,
    boxShadow: `0 .2rem 2rem ${alpha(globalVars.success, .3)}`,

    '& $paragrapy': {
      textDecoration: 'line-through',
    }
  },

  button: {
    marginRight: '1.6rem',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',

      '& $iconCheckbox': {
        '& circle': {
          stroke: globalVars.purple,
        }
      }
    }
  },

  iconCheckbox: {
    paddingLeft: 0,

    '&:hover': {
      stroke: globalVars.purple,
    }
  },

  paragrapy: {
    margin: 0,
  },

  delete: {
    marginLeft: 'auto',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  IconDelete: {
    '&:hover': {
      fill: globalVars.error,
    }
  }
 }));

function TodoItem({ completed, loading, onComplete, text, onDelete, children }) {
  const classes = useStyles();

  return (
    <Box
      className={
        completed
          ? classes.item + " " + classes.itemCompleted
          : classes.item
      }
      component={'li'}
    >
      {loading ? (
        <>
          <Skeleton className={classes.button} variant="circular" width={24} height={24} />
          <Skeleton className={classes.paragrapy} variant="rounded" width={150} height={24} />
          <Skeleton className={classes.delete} variant="circular" width={24} height={24} />
        </>
      ) : (
        <>
          <ButtonBase
            className={classes.button}
            onClick={onComplete}
          >
            {completed === true
              ? <IconCheckboxChecked className={classes.iconCheckboxChecked} />
              : <IconCheckbox className={classes.iconCheckbox} />}
          </ButtonBase>

          <Typography className={classes.paragrapy}>
            {text}
          </Typography>

          <IconButton
            className={classes.delete}
            onClick={onDelete}
          >
            <IconDelete className={classes.IconDelete} />
          </IconButton>
        </>
      )}

      {children}
    </Box>
  );
}

export { TodoItem };