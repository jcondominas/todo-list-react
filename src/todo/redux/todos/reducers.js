import {combineReducers} from 'redux'
import {ADD_TODO, REMOVE_TODO} from "./actions";

export const completedTodosReducer = (state = [], action, todos) => {
    if (action.type === REMOVE_TODO) {
        return [...state,
            todos.find(todo => {
                return todo.id === action.id
            })];
    } else {
        return state
    }
};

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            if (action.text !== "" && action.text !== undefined) {
                return [...state, {title: action.text, id: action.id}];
            } else {
                return state
            }
        case REMOVE_TODO:
            return state.filter(todo => {
                    return todo.id !== action.id
                }
            );
        default:
            return state;
    }
};

const listTodosReducer = (state = {}, action) => {
    let todos = todosReducer(state.todos, action);
    let completedTodos = completedTodosReducer(state.completedTodos, action, state.todos);
    return {...state, todos: todos, completedTodos: completedTodos}
};

export default combineReducers({listTodos: listTodosReducer})