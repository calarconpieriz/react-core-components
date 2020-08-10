import React, {Fragment} from 'react'
import styled from 'styled-components'
import {commonStyles} from './commonStyles'

const { fontSize, color, backgroundColor, activeColor, borderColor, placeHolderColor,disabledColor} = commonStyles; 
 
const Dropdown = styled.select`
  width: 100%;
  font-size: ${fontSize};
  color: ${placeHolderColor};
  border: 1px solid ${borderColor};
  background: ${backgroundColor};
  padding: 7px 0px 7px 16px;
  border-radius: 4px;
  &:focus {
    border: 2px solid ${activeColor};
  }
  &:disabled {
    border: 1px solid ${disabledColor};
  }
`

const Option = styled.option`
  width: 100%;
  background-color: ${backgroundColor}
`

const renderGroup = (group) => {
  return <optgroup label={group.name}>
    {group.options.map(
      option => (<option value={option.value}>{option.text}</option>)
    )}
  </optgroup>
}

export function DropdownComponent ({
  defaultOption = 'Select', 
  options = [], 
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onClick = () => {},
  disabled = false
  }) {
  return (
    <Fragment>
  <Dropdown 
    onChange={onChange}
    onblur={onBlur}
    onfocus={onFocus}
    onclick={onClick}
    disabled={disabled} >
    <Option>{defaultOption}</Option>
    {options.map(option=> {
      return option.isGrouped 
      ? renderGroup(option)
      : <Option value={option.value}>{option.text}</Option>
    })}
  </Dropdown>
  </Fragment>
  )
}