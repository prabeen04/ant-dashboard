import React from 'react';
import { shallow } from 'enzyme';  
import AppLoading from './appLoading';

describe('<AppLoading />', () => {
    const AppLoadingWrapper = shallow(<AppLoading/>);
    console.log(AppLoadingWrapper)
    it('AppLoadingWrapper matches snapshot', () => {
        expect(AppLoadingWrapper).toMatchSnapshot()
    })
})