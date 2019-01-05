import React from 'react';
import { shallow } from 'enzyme';  
import ProgressiveImage from './progressiveImage';

describe('<ProgressiveImage />', () => {
    const ImageWrapper = shallow(ProgressiveImage);
    console.log(ImageWrapper)
    it('matches snapshot', () => {

    })
})