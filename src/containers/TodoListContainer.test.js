import * as React from "react";
import TodoListContainer from "./TodoListContainer";
import {shallow} from "enzyme";
import {createMockStore} from "redux-test-utils";
import {addTodo, removeTodo} from "../store/todolist/actions";

const shallowWithStore = (component, store) => {
    const context = {
        store
    };
    return shallow(component, {context});
};

describe('<TodoListContainer />', () => {
    it('should connect with the store correctly', function () {
        let store;
        const state = {
            listTodos: {
                todos: [],
                completedTodos: []
            }
        };
        store = createMockStore(state);

        const component = shallowWithStore(<TodoListContainer/>, store);

        expect(component).not.toBeNull()
    });

    it('should render a component with two todos', function () {
        let store;
        const state = {
            listTodos: {
                todos: [{title: "Test title", id: 0}, {title: "Test title 2", id: 1}],
                completedTodos: []
            }
        };
        store = createMockStore(state);

        const component = shallowWithStore(<TodoListContainer/>, store);

        expect(component.props().todos.length).toBe(2)
    });

    it('should render component with two completed todos', function () {
        let store;
        const state = {
            listTodos: {
                todos: [],
                completedTodos: [{title: "Test title", id: 0}, {title: "Test title 2", id: 1}]
            }
        };
        store = createMockStore(state);

        const component = shallowWithStore(<TodoListContainer/>, store);

        expect(component.props().completedTodos.length).toBe(2)
    });
    it('should render component with correct dispatchers', function () {
        let store;
        const state = {
            listTodos: {
                todos: [],
                completedTodos: []
            }
        };
        store = createMockStore(state);
        const component = shallowWithStore(<TodoListContainer/>, store);

        component.props().onTodoAdded("Test todo");
        component.props().onTodoClicked(0);

        expect(store.getActions()).toEqual([addTodo("Test todo", 0), removeTodo(0)])
    });
});