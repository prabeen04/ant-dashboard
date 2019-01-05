import React from 'react';
import { shallow } from 'enzyme';
import PaginationComponent from './pagination';

describe('<PaginationComponent />', () => {
    const wrapper = shallow(<PaginationComponent />);
    it('PaginationComponent matches snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})