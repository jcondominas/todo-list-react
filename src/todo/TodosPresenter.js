import React from 'react'
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import FormTodo from "./FormTodos";
import TodoList from "./TodoList";
import CompletedTodolist from "./CompletedTodoList";
import PropTypes from 'prop-types'
import style from './Todos.css'


const TodosPresenter = ({onTodoAdded, todos, completedTodos, onTodoClicked}) => {
    console.log(completedTodos);
    console.log(todos);
    return (
        <Paper elevation={4} className={style.paper}>
            <FormTodo listeners={onTodoAdded}/>
            <TodoList todos={todos}
                      listeners={onTodoClicked}/>
            {(completedTodos.length > 0) && (todos.length > 0) && <Divider/>}
            <CompletedTodolist todos={completedTodos}/>
        </Paper>
    )
}

export default TodosPresenter;

TodosPresenter.propTypes = {
    onTodoClicked: PropTypes.func.isRequired,
    onTodoAdded: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    )).isRequired,
    completedTodos: PropTypes.arrayOf(PropTypes.shape(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    )).isRequired,
};