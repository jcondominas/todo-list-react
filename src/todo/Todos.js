import React from 'react'
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import AddTodoToList from "./FormTodos";
import TodoList from "./TodoList";
import CompletedTodolist from "./CompletedTodoList";
import PropTypes from 'prop-types'
import style from './Todos.css'


const Todos = ({onTodoAdded, todos, completedTodos, onTodoClicked}) => {
    console.log(completedTodos);
    return (
        <Paper elevation={4} className={style.paper}>
            <AddTodoToList listeners={onTodoAdded}/>
            <TodoList todos={todos}
                      listeners={onTodoClicked}/>
            {(completedTodos.length > 0) && (todos.length > 0) && <Divider/>}
            <CompletedTodolist todos={completedTodos}/>
        </Paper>
    )
};

export default Todos;

Todos.propTypes = {
    onTodoClicked: PropTypes.func.isRequired,
    onTodoAdded: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired,
    completedTodos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
};