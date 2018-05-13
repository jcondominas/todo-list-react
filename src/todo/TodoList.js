import React from 'react'
import Typography from 'material-ui/Typography'
import CheckBox from 'material-ui/Checkbox'
import style from './TodoList.css'
import PropTypes from 'prop-types'


const TodoList = (props) => {
    return (
        props.todos.map((todo) =>
            <TodoElement {...todo} key={todo.id} onClick={props.onTodoClicked}/>
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

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
    onTodoClicked: PropTypes.func.isRequired
}

TodoElement.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};