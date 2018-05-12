import Paper from 'material-ui/Paper'
import React from "react";
import style from './Todos.css'
import FormTodo from "./FormTodos";
import TodoList from "./TodoList";

const todosExamples = [
    {title: "Comprar roba per en Gil i l'Emma", id: 1},
    {title: "Avisar metge per el dolor de genoll", id: 2},
];

export default class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: todosExamples};
        this.todoIdIncremental = 3;
        this.onTodoRemove = this.onTodoRemove.bind(this);
        this.onTodoAdded = this.onTodoAdded.bind(this)
    }

    onTodoRemove(todoId) {
        const newTodoList = this.state.todos.filter((todo) => {
            return todo.id !== todoId
        });
        this.setState({
            todos: newTodoList
        })
    }

    onTodoAdded(todo) {
        const newTodoList = [...this.state.todos, {title: todo, id: this.todoIdIncremental}];
        this.todoIdIncremental += 1;
        this.setState({todos: newTodoList})
    }


    render() {
        return (
            <Paper elevation={4} className={style.paper}>
                <FormTodo listeners={{onTodoAdded: this.onTodoAdded}}/>
                <TodoList todos={this.state.todos}
                          listeners={{checked: this.onTodoRemove}}/>
            </Paper>
        )
    }
}
