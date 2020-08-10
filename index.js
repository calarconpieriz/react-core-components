import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {DropdownComponent} from './common/DropdownComponent';
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
    const groupedOptions = [
      {
        isGrouped: true,
        name: 'Matches',
        options: [
          {value: 'option1', text: 'option1'},
          {value: 'two', text: 'two'}
        ]
      },
      {value: 'option1', text: 'option1'},
      {value: 'two', text: 'two'}
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
        <DropdownComponent defaultOption={'Dropdown'} options={groupedOptions} disabled={false}/>
        <DropdownComponent defaultOption={'Biding zone'} options={options} disabled={false}/>

        <InputComponent placeholder={'text'}/>
        <RadioButtonsComponent groupName="fruits" options={radioOptions} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
