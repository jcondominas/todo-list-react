import React from 'react'
import Typography from 'material-ui/Typography'
import CheckBox from 'material-ui/Checkbox'
import style from './TodoList.css'
import PropTypes from 'prop-types'


const TodoList = (props) => {
    console.log(props.todos);
    return (
        props.todos.map((todo) =>
            <TodoElement {...todo} key={todo.id} onClick={props.listeners}/>
        )
    )
};

const TodoElement = ({title, id, onClick}) => {
    return (
        <div className={style.todoElement}>
            <CheckBox onChange={() => {
                onClick(id)
            }}/>
            <Typography variant="display1" className={style.todoText}>
                {title}
            </Typography>
        </div>
    )
};

export default TodoList;

TodoElement.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};