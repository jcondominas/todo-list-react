import {REMOVE_TODO} from "../actions";

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