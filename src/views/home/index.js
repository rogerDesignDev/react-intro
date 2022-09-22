import React from "react";
import {
  Box,
  Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import globalVars from 'src/theme/globalVars.module.scss';

import { useTodos } from "src/hooks/useTodos";
import { Header } from "src/components/Header";
import { TodoSearch } from 'src/components/TodoSearch';
import { TodoCounter } from 'src/components/TodoCounter';
import { TodoList } from 'src/components/TodoList';
import { TodoItem } from 'src/components/TodoItem';
import { AddTodoModal } from 'src/components/AddTodoModal';
import { Footer } from "src/components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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

  taskResult: {
    backgroundColor: globalVars.white,
    border: '.1rem solid' + globalVars.gray,
    borderRadius: globalVars.borderRadius,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2.4rem',
    marginTop: '3rem',
    padding: '2rem',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginBottom: '3rem',
      padding: '3rem',
    },
    '&::before': {
      backgroundColor: globalVars.white,
      border: '.1rem solid' + globalVars.gray,
      borderBottom: 0,
      borderTopLeftRadius: globalVars.borderRadius,
      borderTopRightRadius: globalVars.borderRadius,
      content: '""',
      display: 'block',
      height: '1.5rem',
      left: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      right: 0,
      top: '-1.6rem',
      width: '95%',
    },
    '&::after': {
      backgroundColor: globalVars.white,
      border: '.1rem solid' + globalVars.gray,
      borderBottom: 0,
      borderTopLeftRadius: '.8rem',
      borderTopRightRadius: '.8rem',
      content: '""',
      display: 'block',
      height: '1.5rem',
      left: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      right: 0,
      top: '-3.1rem',
      width: '90%',
    }
  },

  taskResultNoitem: {
    alignItems: 'center',
    minHeight: '19.2rem',

    '& $taskResultParagraph': {
      margin: 0,
    }
  },

  taskResultParagraph: {
    marginBottom: '3rem',
    textAlign: 'center',
    width: '100%',
  },
 }));

function HomeView() {
  const classes = useStyles();

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <Box className={classes.root}>
      <Header />

      <Box className={classes.main} component={'main'}>
        <Box className={classes.wrapper}>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchResult={searchedTodos}
          />

          <Box
            className={
              !loading && !searchedTodos?.length ? (
                classes.taskResult + " " + classes.taskResultNoitem
              ) : (
                classes.taskResult
              )
            }
          >
            {searchedTodos?.length === 0 ? (
              <Typography className={classes.taskResultParagraph} component={'p'}>
                {error && <>Hubo un <strong>error</strong>...</>}
                {loading && <>Cargando <strong>Tareas</strong>...</>}

                {searchedTodos?.length === 0 && searchValue?.length >= 1 ? (
                  <><strong>"{searchValue}"</strong> esta palabra no coincide con ningún resultado.</>
                ) : (
                  (!loading && !searchedTodos?.length) && <>Todavia no hay <strong>tareas</strong> disponibles, prueba añadir una.</>
                )}
              </Typography>
            ) : (
              <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
              />
            )}

            {loading ? (
              <>
                <TodoList>
                  <TodoItem
                    loading={loading}
                  />
                </TodoList>
              </>
            ) : (
              <>
                {!loading && !searchedTodos?.length ? (
                  <></>
                ) : (
                  <TodoList>
                    {searchedTodos.map((todo, idx) => (
                      <TodoItem
                        key={todo?.text + idx}
                        text={todo?.text}
                        completed={todo?.completed}
                        onComplete={() => completeTodo(todo?.text)}
                        onDelete={() => deleteTodo(todo?.text)}
                      />
                    ))}
                  </TodoList>
                )}
              </>
            )}
          </Box>

          <AddTodoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default HomeView;