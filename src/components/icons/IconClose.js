import * as React from 'react';
import {
  SvgIcon,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

 const useStyles = makeStyles((theme) => ({
  root : {
    fill: 'none',
    height: '2.4rem',
    stroke: globalVars.purple,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    transition: theme.transitions.create(['stroke', 'fill']),
    width: '2.4rem',
  }
 }));

const IconClose = ({ className }) => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={
        className
          ? classes.root + " " + className
          : classes.root
      }
      fontSize="inherit"
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18"></path><path d="M6 6L18 18"></path>
    </SvgIcon>
  );
}

export { IconClose };