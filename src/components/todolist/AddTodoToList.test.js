import React from 'react'
import {shallow} from 'enzyme'
import AddTodoToList from "./AddTodoToList";

describe("<AddTodoToList />", () => {
    let wrapper;
    let onTodoAddedMock;
    beforeEach(function () {
        onTodoAddedMock = jest.fn();
        wrapper = shallow(<AddTodoToList onTodoAdded={onTodoAddedMock}/>);
    });
    it("should render a hint to introduce a todo", function () {
        expect(wrapper.find('TextField').props().label).toEqual("Create a new Todo")
    });

    it("should store the todo added from the form", function () {
        const textField = wrapper.find('TextField');
        textField.simulate('change', {target: {value: 'Test input'}});
        expect(wrapper.state().value).toEqual("Test input")
    });

    it("should call onAddTodo function when submit form", function () {
        wrapper.find("TextField").simulate('change', {target: {value: 'Test form'}});
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }
        });

        expect(onTodoAddedMock.mock.calls.length).toBe(1);
        expect(onTodoAddedMock.mock.calls[0][0]).toBe('Test form');
    });

    it('should remove added todo form the input field', function () {
        wrapper.find("TextField").simulate('change', {target: {value: 'Test form'}});
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }
        });

        expect(wrapper.state().value).toBe('')
    });
});