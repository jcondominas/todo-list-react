import React from 'react'
import TodoList from './TodoList'
import TodoListItem from './TodoListItem'
import {mount} from 'enzyme'

describe('<TodoList />', () => {
    it('should render 3 todo item', function () {
        const props = {
            todos: [{title: "Test", id: 0},
                {title: "Test", id: 2},
                {title: "Test", id: 3}],
            onTodoClicked: () => {
            }
        };
        let wrapper = mount(<TodoList  {...props}/>);
        expect(wrapper.find('TodoListItem')).toHaveLength(3)
    });
});