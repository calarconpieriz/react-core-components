import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import formEvents from './formEvents'
import {commonStyles} from './commonStyles'

const { fontSize, color, backgroundColor, activeColor, borderColor, disabledColor, placeHolderColor} = commonStyles;

const InputWrapper = styled.div`
  position:relative;
  display: inline-block;
  width: 100%;
  &:after {
    color: ${props => props.value().length === 0 ? 'transparent' : color};
    position: absolute;
    display: inline-block;
    top: .5em;
    left: 16px;
    content: ${props => props.getMask}${props => props.suffix};
  }
`

const Input = styled.input`
  caret-color: black;
  width: ${props => props.width};
  font-size: ${fontSize};
  color: transparent;
  border: 1px solid ${borderColor};
  background: ${backgroundColor};
  padding: 7px 0px 7px 16px;
  border-radius: 4px;
  &:focus, :active {
    border: 2px solid ${activeColor};
  }
  &:disabled {
    border: 1px solid ${disabledColor};
  }
  &::placeholder {
    color: ${placeHolderColor}
  }
`

export function InputComponent ({
  type = 'text',
  placeholder = '', 
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onClick = () => {},
  disabled = false,
  width = '100%',
  suffix = '',
  }) {
    const [inputValue, setInputValue] = useState('')
    
    const getMask = () => {
      return `"${inputValue} "`
    }

    const getValue = () => {
      return inputValue
    }

    const onValueChange = (value) => {
      setInputValue(value)
    }
  return (
    <Fragment>
    <InputWrapper suffix={suffix} getMask={getMask} value={getValue}>
        <Input type={type} placeholder={placeholder} onChange={event => onValueChange(event.target.value)}
    onblur={onBlur}
    onfocus={onFocus}
    onclick={onClick}
    disabled={disabled}
    width={width} value={inputValue}/>
    </InputWrapper>
    
    
    </Fragment>
  )
}