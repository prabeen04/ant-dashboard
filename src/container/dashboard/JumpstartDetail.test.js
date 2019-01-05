import React from 'react';
import { shallow } from "enzyme";
import JumpstartDetail from './jumpStartDetail';

describe('<JumpstartDetail />', () => {
    const wrapper = shallow(<JumpstartDetail />)
    it('JumpstartDetail snapshot test', () => {
        expect(wrapper).toMatchSnapshot();
        // expect(wrapper).hasClass('jumpstart-box');
    })
})