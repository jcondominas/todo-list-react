export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

let nextTodoId = 0;
export const addTodo = (text, id=nextTodoId++) => ({
    type: ADD_TODO,
    id: id,
    text
});