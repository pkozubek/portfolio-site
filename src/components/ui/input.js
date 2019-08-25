import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 5px;
  margin: 5px;
  border: none;
  background: lightgrey;

  :focus {
    background: lightcoral;
  }
`

const input = ({ value, placeholder, id, name }) => {
  return (
    <StyledInput id={id} name={name} value={value} placeholder={placeholder} />
  )
}

export default input
