import React from 'react';
import {
  Box,
  CardMedia
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import logo from 'src/assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    borderBottom: '.1rem solid' + globalVars.gray,
    display: 'flex',
    height: '5.6rem',
    marginBottom: '3rem',
    [theme.breakpoints.up('md')]: {
      height: '9rem',
      marginBottom: '4.8rem',
    },
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '60rem',
    },
  },

  logo: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '12.5rem',
    },
  },

  date: {
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  const options = {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
  const date = formatter.format(new Date());

  return (
    <Box className={classes.header} component={'header'}>
      <Box className={classes.wrapper}>
        <Box className={classes.logo}>
          <CardMedia
            className={classes.logoImg}
            component="img"
            image={logo}
            alt="MyTask"
            width='125'
            height='29'
          />
        </Box>
        <Box className={classes.date}>
          {date}
        </Box>
      </Box>
    </Box>
  );
}

export { Header };
