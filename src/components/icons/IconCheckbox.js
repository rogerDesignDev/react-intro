import * as React from 'react';
import {
  SvgIcon,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

 const useStyles = makeStyles((theme) => ({
  root : {
    fill: globalVars.white,
    height: '2.4rem',
    stroke: globalVars.gray200,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    transition: theme.transitions.create(['stroke', 'fill']),
    width: '2.4rem',
    '& circle': {
      fill: globalVars.white,
      stroke: globalVars.gray200,
      transition: theme.transitions.create(['stroke', 'fill']),
    }
  }
 }));

const IconCheckbox = ({ className }) => {
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
      <circle cx="12" cy="12" r="11"/>
    </SvgIcon>
  );
}

export { IconCheckbox };