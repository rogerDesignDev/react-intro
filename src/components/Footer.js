import React from 'react';
import {
  Box,
  Typography,
  Link
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import { IconGithub } from './icons/IconGithub';
import { IconLinkedin } from './icons/IconLinkedin';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: globalVars.gray100,
    color: globalVars.purple,
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '60rem',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  footerInner: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 0',
    width: '100%',
  },

  copy: {
    fontSize: '1.5rem',
    width: '100%',
    textAlign: 'center',
    marginBottom: '1.6rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      textAlign: 'letf',
      width: 'auto',
    },
  },

  social: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },

  link: {
    display: 'flex',
    marginRight: '1.6rem',
    '&:last-child': {
      marginRight: 0,
    }
  },

  icon: {
    '&:hover': {
      fill: globalVars.purple200,
    }
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer} component={"footer"}>
      <Box className={classes.wrapper}>
        <Box className={classes.footerInner}>
          <Typography className={classes.copy} component={"p"}>
            Desarrollado por <strong>Roger Fernandes Bomfim</strong>
          </Typography>

          <Box className={classes.social}>
            <Link
              className={classes.link}
              href="https://es.linkedin.com/in/alyenstudio"
              target={"_blank"}
              color="inherit"
            >
              <IconLinkedin className={classes.icon} />
            </Link>
            <Link
              className={classes.link}
              href="https://github.com/rogerDesignDev"
              target={"_blank"}
              color="inherit"
            >
              <IconGithub className={classes.icon} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Footer };
