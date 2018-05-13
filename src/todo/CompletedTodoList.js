import React from 'react'
import Typography from 'material-ui/Typography'
import style from './TodoList.css'


const CompletedTodolist = (props) => {
    return (
        props.todos.map((todo) =>
            <TodoElement todo={todo} key={todo.id} listeners={props.listeners}/>
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

export default CompletedTodolist;