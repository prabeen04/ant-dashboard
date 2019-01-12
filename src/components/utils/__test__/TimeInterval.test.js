import React from 'react';
import { shallow } from "enzyme";
import TimeInterval from '../TimeInterval'
import { toJson } from "enzyme-to-json";
describe('<TimeInterval/>', () => {
    const wrapper = shallow(<TimeInterval />)
    it('should matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
