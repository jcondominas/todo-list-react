import {mount, shallow} from "enzyme";
import Header from "./Header";
import React from "react";

describe('<Header />', () => {
    it('should render title given a specific context', () => {
        let wrapper = mount(<Header/>, {context: {app: {title: 'Test title'}}});
        expect(wrapper.find('h2').text()).toEqual("Todo list App")
    });
});