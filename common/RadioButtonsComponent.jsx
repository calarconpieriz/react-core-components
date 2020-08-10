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
export function RadioButtonsComponent ({
  type = 'radio',
  groupName = 'radio-group', 
  options = [], 
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onClick = () => {},
  }) {
  return (
    <Fragment>
    <RadioButtonsContainer>
      {options.map(option => {
        return (
          <Fragment>
            <input
              id={option.id}
              name={groupName}
              value={option.value}
              type={type} 
              onChange={onChange}
              onblur={onBlur}
              onfocus={onFocus}
              onclick={onClick}
              disabled={option.disabled}/>
            <Label for={option.id}>{option.label}</Label>
          </Fragment>
          )
      })}
    </RadioButtonsContainer>
    </Fragment>
  )
}