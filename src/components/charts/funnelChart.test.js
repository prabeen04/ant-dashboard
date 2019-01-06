import React from 'react';
import { shallow } from 'enzyme';
import FunnelChart from './funnelChart';

describe('<FunnelChart />', () => {
    const wrapper = shallow(<FunnelChart />);
    console.log(wrapper.state())
    console.log(wrapper.props())
    it('FunnelChart matches snapshot', () => {
        expect(wrapper.state()).toEqual({
            data: [
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 20 },
            ],
            options: {
                chart: {
                    height: height,
                    width: width,
                    bottomWidth: 1/7,
                    animate: 300
                },
                block: {
                    dynamicHeight: true,
                    minHeight: 15,
                    highlight: true,
                    fill: {
                        type: 'gradient'
                    }
                },
                tooltip: {
                    enabled: true
                }
            }
        })
    })
})