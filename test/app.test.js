// Just a demo test to wireup
import React from 'react';
import { shallow } from "enzyme";
import App from '../src/App';
describe('App', () => {
    it('should a classBase Component', () => {
        const component = shallow(<App />)
        expect(component).to.exist()
    })
})