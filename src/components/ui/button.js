import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 150px;
  height: auto;
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid lightgray;
  color: gray;
  background: white;
  font-size: 0.8em;
  transition: 0.4s;
  font-family: "Varela Round", sans-serif;

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
    transition: 0.4s;
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
