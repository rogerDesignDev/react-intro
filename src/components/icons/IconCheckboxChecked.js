import * as React from 'react';
import {
  SvgIcon,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

 const useStyles = makeStyles((theme) => ({
  root : {
    fill: globalVars.success,
    stroke: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    transition: theme.transitions.create(['stroke', 'fill']),
    height: '2.4rem',
    width: '2.4rem',
  }
 }));

const IconCheckboxChecked = ({ className }) => {
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
      <path d="M20.4853 3.51469C18.2188 1.24823 15.2053 0 12 0C8.79464 0 5.78119 1.24823 3.51469 3.51469C1.24823 5.78119 0 8.79469 0 12C0 15.2053 1.24823 18.2188 3.51469 20.4853C5.78119 22.7518 8.79469 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79469 22.7518 5.78123 20.4853 3.51469ZM17.7331 9.14405L11.0269 15.8503C10.8896 15.9876 10.7097 16.0562 10.5298 16.0562C10.3498 16.0562 10.1699 15.9876 10.0326 15.8503L6.26691 12.0847C5.99231 11.8101 5.99231 11.3649 6.26691 11.0903C6.54145 10.8157 6.98667 10.8157 7.26127 11.0903L10.5298 14.3588L16.7387 8.14969C17.0133 7.87509 17.4585 7.87509 17.7331 8.14969C18.0077 8.42428 18.0077 8.86945 17.7331 9.14405Z"/>
    </SvgIcon>
  );
}

export { IconCheckboxChecked };