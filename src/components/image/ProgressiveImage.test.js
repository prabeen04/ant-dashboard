import React from 'react';
import { shallow } from 'enzyme';  
import ProgressiveImage from './progressiveImage';

describe('<ProgressiveImage />', () => {
    const ImageWrapper = shallow(<ProgressiveImage/>);
    it('matches snapshot', () => {
        expect(ImageWrapper).toMatchSnapshot()
    })
})