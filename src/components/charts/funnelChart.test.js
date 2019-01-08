import React from 'react';
import { shallow } from 'enzyme';
import FunnelChart from './funnelChart';
import toJson from 'enzyme-to-json';

describe('<FunnelChart />', () => {
    const wrapper = shallow(<FunnelChart/>)
    it('FunnelChart matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})