import React from 'react'
import TodoListItem from './TodoListItem'
import {createShallow} from 'material-ui/test-utils'


describe('Todo list item', () => {
    let shallow;

    beforeEach(function () {
        shallow = createShallow()
    });

    it('render a todo item with text', function () {
        const wrapper = shallow(<TodoListItem onClick={() => {
        }} title={"Test"} id={0}/>);
        expect(wrapper.find("WithStyles(Typography)").childAt(0).text()).toEqual("Test")
    });

    it("'should return a todo with correct id when clicked", function () {
        let todoIdClicked = -1;
        const wrapper = shallow(<TodoListItem onClick={(id) => {
            todoIdClicked = id
        }} title={"Test"} id={100}/>);
        let checkbox = wrapper.find("WithStyles(Checkbox)");

        checkbox.simulate('change');

        expect(todoIdClicked).toEqual(100)
    });
});
