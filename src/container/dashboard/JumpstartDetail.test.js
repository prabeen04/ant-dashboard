import React from 'react';
import { shallow } from "enzyme";
import JumpstartDetail from './jumpStartDetail';

describe('<JumpstartDetail />', () => {
    const wrapper = shallow(<JumpstartDetail />);
    it('matches snapshot', () => {
        expect(wrapper.find('.test').hasClass('jumpstart-box')).to.equal(true);
    })
})