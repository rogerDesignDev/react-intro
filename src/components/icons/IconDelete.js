import * as React from 'react';
import {
  SvgIcon,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

 const useStyles = makeStyles((theme) => ({
  root : {
    fill: globalVars.gray200,
    height: '2.4rem',
    stroke: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    transition: theme.transitions.create(['stroke', 'fill']),
    width: '2.4rem',
  }
 }));

const IconDelete = ({ className }) => {
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
      <path d="M12 0C8.79461 0 5.78123 1.24822 3.51476 3.51469C-1.16408 8.19345 -1.16408 15.8064 3.51462 20.4852C5.78109 22.7518 8.79461 24 12 24C15.2052 24 18.2188 22.7518 20.4852 20.4852C25.1641 15.8064 25.1641 8.19345 20.4852 3.51469C18.2188 1.24822 15.2052 0 12 0ZM17.3997 17.3996C17.1866 17.6127 16.9075 17.7192 16.6283 17.7192C16.3492 17.7192 16.0699 17.6127 15.857 17.3996L12 13.5428L8.14305 17.3997C7.92996 17.6127 7.65083 17.7193 7.37163 17.7193C7.09251 17.7193 6.81323 17.6127 6.60036 17.3997C6.17425 16.9737 6.17425 16.283 6.60036 15.8569L10.4572 12L6.60029 8.14305C6.17418 7.71709 6.17418 7.02633 6.60029 6.60029C7.02625 6.17433 7.71702 6.17433 8.14305 6.60029L12 10.4572L15.8568 6.60029C16.2828 6.17433 16.9735 6.17433 17.3996 6.60029C17.8257 7.02625 17.8257 7.71702 17.3996 8.14305L13.5428 12L17.3997 15.8569C17.8257 16.2829 17.8257 16.9737 17.3997 17.3996Z"/>
    </SvgIcon>
  );
}

export { IconDelete };