import React, {Fragment} from 'react'
import styled from 'styled-components'
import Select from 'react-select'


export function SelectComponent({options}) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: '#000000',
      fontSize: '18px',
      padding: 20,
      fontFamily: 'AvenirRegular, Helvetica, Arial, sans-serif',
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      width: '100%',
      fontSize: '18px',
      ...provided,
    }),
    input: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      fontSize: '18px',
      height: 38,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'
      return { ...provided, opacity, transition }
    },
  }
  return (
    <Fragment>
      <Select
      value={1}
      
      name="colors"
      options={options}
      classNamePrefix="select"
      styles={customStyles}
      placeholder={'asd'}
      hideSelectedOptions
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#99D9F0',
          primary: '#99D9F0',
        },
      })}
    />
    </Fragment>
  )
}