import React from 'react'
import Typography from 'material-ui/Typography'
import style from './TodoList.css'
import TodoList from "./TodoList";
import PropTypes from "prop-types";


const CompletedTodoList = ({todos}) => {
    return (
        todos.map((todo) =>
            <TodoElement todo={todo} key={todo.id}/>
        )
    )
};

const TodoElement = (props) => {
    return (
        <div className={style.todoElement}>
            <Typography variant="subheading" className={`${style.todoText} ${style.completedTodoText}`}>
                {props.todo.title}
            </Typography>
        </div>
    )
};

export default CompletedTodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
}
