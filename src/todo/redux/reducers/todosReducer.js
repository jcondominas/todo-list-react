import {ADD_TODO, REMOVE_TODO} from "../actions";

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