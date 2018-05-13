import {combineReducers} from 'redux'
import {completedTodosReducer} from "./completedTodosReducer";
import {todosReducer} from "./todosReducer";

const listTodosReducer = (state = {}, action) => {
    let todos = todosReducer(state.todos, action);
    let completedTodos = completedTodosReducer(state.completedTodos, action, state.todos);
    return {...state, todos: todos, completedTodos: completedTodos}
};

export default combineReducers({listTodos: listTodosReducer})