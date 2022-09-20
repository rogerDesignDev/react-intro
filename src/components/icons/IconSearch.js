import * as React from 'react';
import {
  SvgIcon,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

 const useStyles = makeStyles((theme) => ({
  root : {
    fill: globalVars.purple,
    stroke: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    transition: theme.transitions.create(['stroke', 'fill']),
    height: '2.4rem',
    width: '2.4rem',
  }
 }));

const IconSearch = ({ className }) => {
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
      <path d="M23.6975 22.281L16.8116 15.3901C18.1691 13.7621 18.9856 11.6815 18.9856 9.40915C18.9856 4.22501 14.731 0.00982666 9.49769 0.00982666C4.26437 0.00982666 0 4.22993 0 9.41407C0 14.5982 4.25453 18.8134 9.48786 18.8134C11.711 18.8134 13.7571 18.051 15.3803 16.7771L22.2908 23.6877C22.6941 24.091 23.2942 24.091 23.6975 23.6877C24.1008 23.2843 24.1008 22.6843 23.6975 22.281ZM2.0166 9.41407C2.0166 5.34152 5.37104 2.03135 9.48786 2.03135C13.6047 2.03135 16.9591 5.34152 16.9591 9.41407C16.9591 13.4866 13.6047 16.7968 9.48786 16.7968C5.37104 16.7968 2.0166 13.4817 2.0166 9.41407Z"/>
    </SvgIcon>
  );
}

export { IconSearch };