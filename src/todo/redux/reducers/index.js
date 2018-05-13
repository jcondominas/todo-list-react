import {combineReducers} from 'redux'
import {
    REMOVE_TODO,
    ADD_TODO
} from '../actions'

const completedTodosReducer = (state = [], action, todos) => {
    if (action.type === REMOVE_TODO) {
        return [...state,
            todos.find(todo => {
                return todo.id === action.id
            })];
    } else {
        return state
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {title: action.text, id: action.id}];
        case REMOVE_TODO:
            return state.filter(todo => {
                    return todo.id !== action.id
                }
            );
        default:
            return state;
    }
};

const rootState = (state = {}, action) => {
    let todos = todosReducer(state.todos, action);
    let completedTodos = completedTodosReducer(state.completedTodos, action, state.todos);
    return {...state, todos: todos, completedTodos: completedTodos}
};

export default combineReducers({listTodos: rootState})