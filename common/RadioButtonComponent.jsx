import React, {Fragment} from 'react'
import styled from 'styled-components'
import formEvents from './formEvents'
import {commonStyles} from './commonStyles'

const Label = styled.label`
  font-size: 16px;
  color: #929292;
  background: #F9F9F9;
  border: 1px solid #CCCCCC;
  padding: 10px 20px;
  :first-of-type {
    border: 1px solid #CCCCCC;
    border-radius: 10px 0px 0px 10px;
  }
  :last-of-type {
    border: 1px solid #CCCCCC;
    border-radius: 0px 10px 10px 0px;
  }
`;

const RadioButtonsContainer = styled.div`
  font-family: arial;
  margin: 10px;
  & > input[type=radio] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  & > label{
    display: inline-block;   
  }
  & > label:hover {
    background: #EDEDED;
  }
  & > input[type=radio]:focus + label {
   border: 1px solid #444;
  }
  & > input[type="radio"]:checked + label {
    background-color: #E5F5FB;
    border: 1px solid #99D9F0;
  }

  & >input[type="radio"]:disabled + label {
    color: #CCCCCC;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
  }
`
export function RadioButtonComponent ({
  type = 'radio',
  placeholder = '', 
  options = [], 
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onClick = () => {},
  disabled = false,
  width = '100%'
  }) {
  return (
    <Fragment>
    <RadioButtonsContainer>
      {options.map(option => {
        return (
          <Fragment>
            <input
              type={type} 
              placeholder={placeholder} 
              onChange={onChange}
              onblur={onBlur}
              onfocus={onFocus}
              onclick={onClick}
              disabled={disabled}/>
            <Label for="">Apple</Label>
          </Fragment>
          )
      })}
      <input type="radio" id="radioApple" name="radioFruit" value="apple" />
      <Label for="radioApple">Apple</Label>

      <input type="radio" id="radioBanana" name="radioFruit" value="banana" />
      <Label for="radioBanana">Banana</Label>
      <input type="radio" id="radioBan" name="radioFruit" value="banana" />
      <Label for="radioBan">Banana</Label>

      <input type="radio" id="radioOrange" name="radioFruit" value="orange" disabled />
      <Label for="radioOrange">Orange</Label> 
    </RadioButtonsContainer>
    </Fragment>
  )
}