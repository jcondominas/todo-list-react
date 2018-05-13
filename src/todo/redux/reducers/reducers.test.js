import {todosReducer} from './todosReducer'
import {completedTodosReducer} from './completedTodosReducer'
import reducer from './reducers'
import expect from 'expect'
import {addTodo, removeTodo} from "../actions";

describe('Reducers should', () => {
    describe('Todos reducer should', () => {
        let initialState = []
        it("return initial state", () => {
            expect(todosReducer(undefined, "")).toEqual(
                []
            )
        });
        it('return state with 1 todo when add_todo action is done', () => {
            expect(todosReducer([], addTodo("Test"))).toEqual(
                [{title: 'Test', id: 0}]
            )
        });
        it('return state without todo id 1 when remove todo', () => {
            expect(todosReducer([{title: 'Test', id: 1}], removeTodo(1))).toEqual(
                []
            )
        })
        it('should not add a new todo with empty text', () => {
            expect(todosReducer([], addTodo(""))).toEqual(
                []
            )
            expect(todosReducer([], addTodo(undefined))).toEqual(
                []
            )
        });
    });

    describe("CompletedTodos reducer should", () => {
        let initialState = []
        it("should return initial state", () => {
            expect(completedTodosReducer(undefined, '', [])).toEqual(
                []
            )
        })
        it('should return one completed task when remove from todos', () => {
            expect(completedTodosReducer(initialState, removeTodo(0), [{title: 'Test', id: 0}])).toEqual(
                [{title: 'Test', id: 0}]
            )
        });
    })

    describe('Listtodos reducers', () => {
        let initialState = {listTodos: {todos: [], completedTodos: []}}
        it('should return initial state', () => {
            expect(reducer(undefined, "")).toEqual(
                {listTodos: {todos: [], completedTodos: []}}
            )
        });
        it('should return a state with 1 new todo', () => {
            expect(reducer(initialState, addTodo("Test", 0))).toEqual(
                {
                    listTodos: {
                        todos: [{title: "Test", id: 0}],
                        completedTodos: []
                    },
                }
            )
        });
        it('should return a state with 1 completed todo', function () {
            let state = {
                listTodos: {
                    todos: [{title: "Test", id: 0}],
                    completedTodos: []
                }
            };
            expect(reducer(state, removeTodo(0))).toEqual(
                {
                    listTodos: {
                        todos: [],
                        completedTodos: [{title: 'Test', id: 0}]
                    }
                }
            )
        });
    });
});
