import React from 'react';
import {
  Box,
  Typography,
  InputBase,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import Background from 'src/assets/task.svg';
import { IconSearch } from './icons/IconSearch';
import { IconClose } from './icons/IconClose';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: '90% bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '12rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'contain',
    },
  },

  wrapper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '60rem',
    },
  },

  title: {
    color: globalVars.black,
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: '4rem',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
      lineHeight: '4.8rem',
    },
  },

  search: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '39rem',
    },
  },

  input: {
    display: 'flex',
    marginBottom: '4.8rem',
    position: 'relative',
    width: '100%',
    '& input': {
      alignItems: 'center',
      backgroundColor: globalVars.white,
      border: '.1rem solid' + globalVars.gray,
      borderRadius: '.8rem',
      boxShadow: 'none',
      color: globalVars.black,
      display: 'flex',
      fontSize: '1.5rem',
      height: '2.8rem',
      lineHeight: '2.4rem',
      padding: '1rem 2rem 1rem 5.5rem',
      transition: theme.transitions.create(['border-color']),
      width: '100%',
      '&:hover, &:focus': {
        borderColor: globalVars.black,
      },
      '&:focus': {
        fontWeight: 600,
      },
    },
  },
  inputValue: {
    marginBottom: '.8rem',
  },

  icon: {
    position: 'absolute',
    left: '1.5rem',
  },

  buttonClear: {
    position: 'absolute',
    right: '.5rem',
    top: '.5rem',
  },

  result: {
    display: 'flex',
    width: '100%',
    marginBottom: '1.6rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '39rem',
    },
  },
 }));

function TodoSearch({ searchValue, setSearchValue }) {
  const classes = useStyles();

  const handleSearch = (e) => {
    console.log(e.target.value);

    const searchWord = e.target.value;
    setSearchValue(searchWord);
  }

  const clearInput = () => {
    setSearchValue('');
  }

  return (
    <Box
      className={classes.root}
      style= {{ backgroundImage: `url(${Background})` }}
    >
      <Box className={classes.wrapper}>
        <Typography className={classes.title} component={'h1'}>
          Listado de Tareas
        </Typography>

        <Box className={classes.search}>
          <InputBase
            className={
              searchValue?.length === 0 ? (
                classes.input
              ) : searchValue === '' ? (
                <></>
              ) : (
                classes.input + " " + classes.inputValue
              )
            }
            placeholder={'Buscar en la lista de Tareas'}
            startAdornment={
              <InputAdornment className={classes.icon} position="start">
                <IconSearch />
              </InputAdornment>
            }
            onChange={handleSearch}
            value={searchValue}
          />
          {searchValue !== '' && (
            <IconButton
              className={classes.buttonClear}
              onClick={clearInput}
            >
              <IconClose />
            </IconButton>
          )}
        </Box>

        {searchValue === '' ? (
          <></>
        ) : (
          <Box className={classes.result}>
            <Typography className={classes.paragrapy}>
              "<strong>{searchValue}</strong>" Aparece en los siguientes resultados.
            </Typography>
          </Box>
        )
      }
      </Box>
    </Box>
  );
}

export { TodoSearch };