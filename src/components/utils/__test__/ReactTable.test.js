import React from 'react';
import { shallow } from "enzyme";
import ReactTable from '../ReactTable'
import { toJson } from "enzyme-to-json";
describe('<ReactTable/>', () => {
    const wrapper = shallow(<ReactTable />)
    it('should matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
