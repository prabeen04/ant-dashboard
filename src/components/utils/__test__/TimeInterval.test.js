import React from 'react';
import { shallow } from "enzyme";
import TimeInterval from '../TimeInterval'

describe('<TimeInterval/>', () => {
    const wrapper = shallow(<TimeInterval />)
    it('should matches snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
