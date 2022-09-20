import React, { Fragment, useContext, useState } from 'react';
import {
  ButtonBase,
  alpha,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import { TodoContext } from 'src/context';
import { IconClose } from './icons/IconClose';

 const useStyles = makeStyles((theme) => ({
  button : {
    background: globalVars.purple,
    borderRadius: globalVars.borderRadius,
    color: globalVars.white,
    display: 'flex',
    fontSize: '1.5rem',
    fontWeight: 700,
    height: '5rem',
    lineHeight: '2.4rem',
    marginBottom: '3rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '20rem',
    width: '100%',
    transition: theme.transitions.create(['background']),
    '&:hover': {
      background: globalVars.purple200,
    }
  },

  dialogScrollPaper: {
    backgroundColor: alpha(globalVars.black, 0.8),
  },
  dialog: {
    borderRadius: '1.6rem',
    margin: '.8rem 1.2rem',
    maxHeight: 'calc(100% - 2.4rem)',
    maxWidth: 'calc(100% - 1.6rem)',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: '3.2rem',
      maxHeight: 'calc(100% - 6.4rem)',
      maxWidth: '60rem',
    },
  },
  dialogClose: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  dialogTitle: {
    padding: '1.6rem 1.2rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.4rem 4.8rem',
    },
  },
  dialogContent: {
    backgroundColor: globalVars.gray100,
    borderRadius: globalVars.borderRadius,
    padding: '1.2rem',
    margin: '0 1.2rem 1.2rem 1.2rem',
    [theme.breakpoints.up('md')]: {
      margin: '0 4.8rem 2.4rem 4.8rem',
      padding: '1.6rem',
    },
  },

  buttonClose: {
    backgroundColor: globalVars.gray100,
    borderRadius: '50%',
    height: '3.2rem',
    width: '3.2rem',
  },

  title: {
    fontSize: '2.2rem',
    fontWeight: 700,
    lineHeight: '3.2rem',
  },

  subtitle: {
    marginBottom: '1.6rem',
  },

  input: {
    display: 'flex',
    marginBottom: '2.4rem',
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
      padding: '1rem 2rem',
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

  textarea: {
    alignItems: 'center',
    backgroundColor: globalVars.white,
    border: '.1rem solid' + globalVars.gray,
    borderRadius: '.8rem',
    boxShadow: 'none',
    color: globalVars.black,
    display: 'flex',
    fontSize: '1.5rem',
    lineHeight: '2.4rem',
    marginBottom: '2.4rem',
    padding: '1rem 2rem',
    position: 'relative',
    transition: theme.transitions.create(['border-color']),
    width: '100%',
    '&:hover, &:focus': {
      borderColor: globalVars.black,
    },
    '&:focus': {
      fontWeight: 600,
    },
  },

  buttonSave: {
    marginBottom: 0,
  }
 }));

function AddTodoModal({ open, setOpen }) {
  const classes = useStyles();
  const [newTodoValue, setNewTodoValue] = useState('');

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext);

  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  }

  return (
    <Fragment>
      <ButtonBase
        className={classes.button}
        onClick={handleClickOpen('paper')}
      >
        Añadir Tarea
      </ButtonBase>

    <Dialog
      PaperProps={{
        classes: {
          root: classes.dialog,
        }
      }}
      BackdropProps={{
        classes: {
          root: classes.diagoScrollPaper,
        }
      }}
      open={open}
      scroll={scroll}
      aria-labelledby="task-dialog-title"
      aria-describedby="task-dialog-description"
    >
      <DialogTitle id="task-dialog-title" component={'div'}>
        <Box className={classes.dialogClose}>
          <ButtonBase
            className={classes.buttonClose}
            onClick={handleClose}
            aria-label='close'
          >
            <IconClose />
          </ButtonBase>
        </Box>
        <Typography className={classes.title} component={'h2'}>
          Crear una nueva Tarea
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box id="task-dialog-description">
          <Typography className={classes.subtitle} component={'h3'}>
            Título de la Tarea:
          </Typography>

          <Box
            className={classes.form}
            component="form"
            onSubmit={onSubmit}
          >
            <TextareaAutosize
              className={classes.textarea}
              aria-label="Insertar texto de la Tarea"
              minRows={3}
              placeholder="Por ejemplo: Vacaciones"
              onChange={onChange}
              value={newTodoValue}
            />

            <ButtonBase
              className={classes.button + " " + classes.buttonSave}
              onClick={handleClickOpen('paper')}
              type='submit'
            >
              Crear Tarea
            </ButtonBase>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>

    </Fragment>
  );
}

export { AddTodoModal };
