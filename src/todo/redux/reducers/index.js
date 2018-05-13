import {combineReducers} from 'redux'

const initialState = {
    todos: [],
    completedTodos: []
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_TODO":
            return ({
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                }),
                completedTodos:
                    state.completedTodos.concat(
                        state.todos.find(todo => {
                            return todo.id === action.id
                        })
                    )
            });
        case "ADD_TODO":
            return ({
                ...state,
                todos: state.todos.concat(
                    {title: action.text, id: action.id}
                )
            });
        default:
            return state;
    }
};

export default combineReducers({todos})