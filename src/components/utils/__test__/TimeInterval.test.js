import React from 'react';
import { shallow } from "enzyme";
import TimeInterval from '../TimeInterval'
import toJson from "enzyme-to-json";
describe('<TimeInterval/>', () => {
    const wrapper = shallow(<TimeInterval time=[
        { id: 1, value: '1W' },
        { id: 2, value: '4W' },
        { id: 3, value: '1Y' },
        { id: 4, value: 'MTD' },
        { id: 5, value: 'QTD' },
        { id: 6, value: 'YTD' },
        { id: 7, value: 'ALL' },
    ] />)
    it('should matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
