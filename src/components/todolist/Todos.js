import React from 'react'
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import AddTodoToList from "./AddTodoToList";
import TodoList from "./TodoList";
import CompletedTodoList from "./CompletedTodoList";
import PropTypes from 'prop-types'
import style from './Todos.css'


const Todos = ({onTodoAdded, todos, completedTodos, onTodoClicked}) => {
    return (
        <Paper elevation={4} className={style.paper}>
            <AddTodoToList onTodoAdded={onTodoAdded}/>
            <TodoList todos={todos}
                      onTodoClicked={onTodoClicked}/>
            {(completedTodos.length > 0) && (todos.length > 0) && <Divider/>}
            <CompletedTodoList todos={completedTodos}/>
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