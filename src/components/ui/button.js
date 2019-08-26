import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 150px;
  height: auto;
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid lightgreen;
  color: white;
  background: lightgreen;

  &:disabled {
    background: rgb(224, 223, 223);
    color: gray;
    border: 2px solid lightgray;
    cursor: not-allowed;
  }

  &:hover:enabled {
    border: 2px solid rgb(61, 175, 213);
    box-sizing: border-box;
    color: rgb(61, 175, 213);
  }
`

const button = ({ disabled, action, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={action}>
      {children}
    </StyledButton>
  )
}

export default button
