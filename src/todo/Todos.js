import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import React from "react";
import style from './Todos.css'
import FormTodo from "./FormTodos";
import TodoList from "./TodoList";
import CompletedTodolist from "./CompletedTodoList";

const todosExamples = [
    {title: "Comprar roba per en Gil i l'Emma", id: 0},
    {title: "Avisar metge per el dolor de genoll", id: 1},
];

export default class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: todosExamples,
            completedTodos: [{title: "Avisar metge per el dolor de genoll", id: -1}]
        };
        this.currentId = this.state.todos.length;
        this.onTodoRemove = this.onTodoRemove.bind(this);
        this.onTodoAdded = this.onTodoAdded.bind(this)
    }

    onTodoRemove(todoId) {
        const newTodoList = this.state.todos.filter((todo) => {
            return todo.id !== todoId
        });
        const todoCompleted = this.state.todos.find((todo) => {
            return todo.id === todoId
        });
        this.setState({
            todos: newTodoList,
            completedTodos: [...this.state.completedTodos, todoCompleted]
        })
    }

    onTodoAdded(todo) {
        if (todo !== "") {
            const newTodoList = [...this.state.todos, {title: todo, id: this.currentId++}];
            this.setState({todos: newTodoList})
        }
    }


    render() {
        return (
            <Paper elevation={4} className={style.paper}>
                <FormTodo listeners={{onTodoAdded: this.onTodoAdded}}/>
                <TodoList todos={this.state.todos}
                          listeners={{checked: this.onTodoRemove}}/>
                {(this.state.completedTodos.length > 0) && (this.state.todos.length > 0) && <Divider/>}
                <CompletedTodolist todos={this.state.completedTodos}/>
            </Paper>
        )
    }
}
