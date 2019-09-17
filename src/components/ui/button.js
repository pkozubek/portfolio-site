import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 150px;
  height: auto;
  padding: 15px;
  margin: ${props => (props.isCentered ? "10px auto" : "5px")};
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid rgba(51, 153, 255, 0.5);
  color: rgba(51, 153, 255, 0.7);
  background: white;
  font-size: 0.8em;
  transition: 0.4s;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;

  &:disabled {
    background: rgb(224, 223, 223);
    color: gray;
    border: 2px solid lightgray;
    cursor: not-allowed;
  }

  &:hover:enabled {
    border: 2px solid rgb(61, 175, 213);
    box-sizing: border-box;
    background: rgb(61, 175, 213);
    color: white;
    transition: 0.4s;
  }
`

const button = ({ disabled, action, children, centered }) => {
  return (
    <StyledButton isCentered={centered} disabled={disabled} onClick={action}>
      {children}
    </StyledButton>
  )
}

export default button
