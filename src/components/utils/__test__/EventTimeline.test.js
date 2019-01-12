import React from 'react';
import { shallow } from "enzyme";
import EventTimelie from '../EventTimelie'
import { toJson } from "enzyme-to-json";
describe('<EventTimelie/>', () => {
    const wrapper = shallow(<EventTimelie />)
    it('should matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
