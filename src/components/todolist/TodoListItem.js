import React from 'react'
import style from './TodoList.css'
import CheckBox from "material-ui/Checkbox";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";

const TodoListItem = ({title, id, onClick}) => {
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

export default TodoListItem;

TodoListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};