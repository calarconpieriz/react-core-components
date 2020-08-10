import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {DropdownComponent} from './common/DropdownComponent';
import {InputComponent} from './common/InputComponent'
import {RadioButtonComponent} from './common/RadioButtonComponent'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Dev'
    };
  }


  render() {
    const options = [{value: 'option1', text: 'option1'},{value: 'two', text: 'two'}]
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Components playbook
        </p>
        <DropdownComponent defaultOption={'Biding zone'} options={options} disabled={false}/>
        <InputComponent placeholder={'text'}/>
        <RadioButtonComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
