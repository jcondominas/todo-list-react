import React from 'react'
import Typography from 'material-ui/Typography'
import CheckBox from 'material-ui/Checkbox'
import style from './TodoList.css'


const TodoList = (props) => {
    return (
        props.todos.map((todo) =>
            <TodoElement todo={todo} key={todo.id} listeners={props.listeners}/>
        )
    )
};

const TodoElement = (props) => {
    return (
        <div className={style.todoElement}>
            <Typography variant="display1" className={style.todoText}>
                {props.todo.title}
            </Typography>
            <CheckBox onChange={() => {
                props.listeners.checked(props.todo.id)
            }}/>
        </div>
    )
}

export default TodoList;