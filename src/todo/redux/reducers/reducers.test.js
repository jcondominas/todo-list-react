import rootState from './reducers'
import expect from 'expect'
import {addTodo} from "../actions";

describe('Test for todo lists reducers', () => {
    let initialState = {listTodos: {todos: [], completedTodos: []}};
    it('should return initial state', () => {
        expect(rootState(undefined, "INIT")).toEqual(initialState)
    });
    it('should add a new todo item', ()=>{
        expect(rootState(initialState, addTodo("Test"))).toEqual(
            {listTodos: {todos: [{title: "Test", id: 0}], completedTodos: []}}
        )
    });
});