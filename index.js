import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {DropdownComponent} from './common/DropdownComponent';
import {SelectComponent} from './common/SelectComponent';
import {InputComponent} from './common/InputComponent'
import {RadioButtonsComponent} from './common/RadioButtonsComponent'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Dev'
    };
  }


  render() {
    const options = [{value: 'option1', text: 'option1'},{value: 'two', text: 'two'}]
    const optionsSelect = [
      {value: 'New project', label: 'New project'},
      {
        
        label: 'Matches for this PPA demand',
        options: [
          {value: 'option1', label: 'option1'},
          {value: 'two', label: 'two'}
        ]
      },
      {
        
        label: 'Other projects',
        options: [
          {value: 'option1', label: 'option1'},
          {value: 'two', label: 'two'}
        ]
      },
    ]
    const groupedOptions = [
      {value: 'New project', text: 'New project'},
      {
        isGrouped: true,
        name: 'Matches for this PPA demand',
        options: [
          {value: 'option1', text: 'option1'},
          {value: 'two', text: 'two'}
        ]
      },
      {
        isGrouped: true,
        name: 'Other projects',
        options: [
          {value: 'option1', text: 'option1'},
          {value: 'two', text: 'two'}
        ]
      },
    ]
    const radioOptions = [
      {
        id: 'apple',
        value: 'apple',
        label: 'Apple'
      },
      {
        id: 'orange',
        value: 'orange',
        label: 'Orange'
      },
      {
        id: 'banana',
        value: 'banana',
        label: 'Banana'
      }
    ]
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Components playbook
        </p>
        <DropdownComponent defaultOption={'Select'} options={groupedOptions} disabled={false}/>
        <DropdownComponent defaultOption={'Biding zone'} options={options} disabled={false}/>

        <InputComponent placeholder={'text'}/>
        <InputComponent placeholder={'number'} suffix={'"GWh"'}/>
        <RadioButtonsComponent groupName="fruits" options={radioOptions} />
        <SelectComponent options={optionsSelect} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
