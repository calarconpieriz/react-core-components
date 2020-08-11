import React, {Fragment} from 'react'
import styled from 'styled-components'
import formEvents from './formEvents'
import {commonStyles} from './commonStyles'

const { fontSize, color, backgroundColor, activeColor, borderColor, disabledColor, placeHolderColor} = commonStyles;

const InputWrapper = styled.div`
  position:relative;
  display: inline-block;
  width: 100%;
  &:after {
    position: absolute;
    display: inline-block;
    top: .5em;
    right: .5em;
    content: ${props => props.suffix};
  }
`

const Input = styled.input`
  width: ${props => props.width};
  font-size: ${fontSize};
  color: ${color};
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
  return (
    <Fragment>
    <InputWrapper suffix={suffix}>
        <Input type={type} placeholder={placeholder} onChange={onChange}
    onblur={onBlur}
    onfocus={onFocus}
    onclick={onClick}
    disabled={disabled}
    width={width}/>
    </InputWrapper>
    
    </Fragment>
  )
}