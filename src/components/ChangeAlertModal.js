import React, { forwardRef } from 'react';
import {
  Box,
  Typography,
  Slide,
  Dialog,
  DialogContent,
  DialogContentText,
  ButtonBase,
  alpha,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from "src/theme/globalVars.module.scss";

import { withStorageListener } from './withStorageListener';

const useStyles = makeStyles((theme) => ({
  dialog: {
    alignItems: 'flex-end',
  },
  scrollPaper: {
    alignItems: 'flex-end',
    padding: 0,
  },
  backDrop: {
    backgroundColor: alpha(globalVars.black, 0.8),
  },
  paper: {
    backgroundColor: globalVars.grayWhite,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: globalVars.borderRadius,
    borderTopRightRadius: globalVars.borderRadius,
    boxShadow: '0 0 2rem rgba(59, 64, 78, 0.1)',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  dialogCustomizedWidth: {
    flexDirection: 'row',
    maxWidth: '100%',
    width: '100%',
  },
  dialogContent: {
    color: globalVars.perfectGray,
    marginBottom: 0,
    padding: '3.2rem 0',
    '&:first-child': {
      padding: '2.4rem',
      [theme.breakpoints.up('sm')]: {
        padding: '3.2rem 0',
      },
    },
  },
  dialogIntro: {
    marginBottom: '2.4rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
    },
  },
  dialogContentText: {
    marginBottom: 0,
  },
  dialogWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '60rem',
    },
  },
  title: {
    color: globalVars.blackBrad,
    fontSize: '1.8rem',
    fontWeight: 600,
    paddingBottom: '.8rem',
  },
  dialogActions: {
    justifyContent: 'flex-start',
    marginLeft: 0,
    paddingTop: 0,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      marginLeft: 'auto',
    },
  },
  button: {
    background: globalVars.purple,
    borderRadius: globalVars.borderRadius,
    color: globalVars.white,
    display: "flex",
    fontSize: "1.5rem",
    fontWeight: 700,
    height: "5rem",
    lineHeight: "2.4rem",
    maxWidth: "20rem",
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: "100%",
    transition: theme.transitions.create(["background"]),
    "&:hover": {
      background: globalVars.purple200,
    },
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ChangeAlert({ show, toggleShow }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClic = () => {
    setOpen(false);
    toggleShow();
  };

  if (show) {
    return (
      <Dialog
        className={classes.dialog}
        classes={{
          scrollPaper: classes.scrollPaper,
          paperFullWidth: classes.dialogCustomizedWidth,
        }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
        PaperProps={{
          classes: {
            root: classes.paper,
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="cancel-dialog-title"
        aria-describedby="cancel-dialog-description"
        fullWidth
      >
        <DialogContent className={classes.dialogContent}>
          <DialogContentText
            id="cancel-dialog-description"
            className={classes.dialogContentText}
            component={'div'}
          >
            <Box className={classes.dialogWrapper}>
              <Box className={classes.dialogIntro}>
                <Typography className={classes.title} component={'h2'}>
                  ¿Quieres sincronizar tus Tareas?
                </Typography>
                <Typography className={classes.paragraph}>
                  Hay cambios en otra pestaña o ventana del navegador.
                </Typography>
              </Box>
              <Box className={classes.dialogActions}>
                <ButtonBase
                  className={classes.button}
                  onClick={handleClic}
                >
                  Sincronizar
                </ButtonBase>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };