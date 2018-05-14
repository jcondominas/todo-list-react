import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'


const TodoList = (props) => {
    return (
        props.todos.map((todo) =>
            <TodoListItem {...todo} key={todo.id} onClick={props.onTodoClicked}/>
        )
    )
};

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
    onTodoClicked: PropTypes.func.isRequired
};