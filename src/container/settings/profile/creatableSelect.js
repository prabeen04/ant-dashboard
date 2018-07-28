import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from './options';

class Creatable extends Component {
    state = {
        isLoading: false,
        options: defaultOptions,
        value: undefined,
      };
      handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ value: newValue });
      };
      handleCreate = (inputValue: any) => {
        this.setState({ isLoading: true });
        console.group('Option created');
        console.log('Wait a moment...');
        setTimeout(() => {
          const { options } = this.state;
          const newOption = createOption(inputValue);
          console.log(newOption);
          console.groupEnd();
          this.setState({
            isLoading: false,
            options: [...options, newOption],
            value: newOption,
          });
        }, 1000);
      };
    render() {
        return (
            <CreatableSelect
                isClearable
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                options={colourOptions}
                // onCreateOption={(value) => console.log(value)}
                // getNewOptionData={(a, b)=>{
                //     console.log(a)
                //     console.log(b)
                //     return b;
                // }}
            />
        );
    }
}

export default Creatable;