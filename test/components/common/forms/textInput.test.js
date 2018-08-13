import React from 'react'
import { shallow } from "enzyme";
import TextInput from '../src/components/common/forms/textInput'

describe('It should render a Text Input', () => {
    const TextInput = shallow(<TextInput />)
    it('should exist', () => {
        TextInput.to.exist()
    })
})