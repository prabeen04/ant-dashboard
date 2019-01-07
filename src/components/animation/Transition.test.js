import React from 'react';
import { shallow } from 'enzyme';
import Transition from './transition';
import toJson from "enzyme-to-json";

describe('<Transition />', () => {
    const wrapper = shallow(<Transition />)
    const div = <div>this is TransitionComponent</div>
    it('Transition matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})