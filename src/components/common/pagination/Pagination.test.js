import React from 'react';
import { shallow } from 'enzyme';
import PaginationComponent from './pagination';
import toJson from 'enzyme-to-json';

describe('<PaginationComponent />', () => {
    const wrapper = shallow(<PaginationComponent />);
    it('PaginationComponent matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})