import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  padding: 20px;
  margin: 5px;
  border: none;
  background: rgba(220, 220, 220, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(220, 220, 220, 0.2);
  font-family: "Varela Round", sans-serif;

  &:focus {
    outline: none;
    border: 1px solid rgb(51, 153, 255);
    border-radius: 8px;
    transition: 0.3s;
  }
`
const StyledTextarea = styled.textarea`
  padding: 15px;
  margin: 5px;
  border: none;
  background: rgba(220, 220, 220, 0.2);
  border-radius: 8px;
  resize: none;
  transition: height 0.5s ease-out;
  height: 50px;
  font-family: "Varela Round", sans-serif;

  &:focus {
    outline: none;
    height: 150px;
    transition: height 0.5s ease-in;
    border: 1px solid rgb(51, 153, 255);
    border-radius: 8px;
  }
`

const input = ({ change, value, placeholder, id, name, type }) => {
  switch (type) {
    case "text":
      return (
        <StyledInput
          id={id}
          name={name}
          value={value}
          onChange={change}
          placeholder={placeholder}
        />
      )
    case "textarea":
      return (
        <StyledTextarea
          id={id}
          name={name}
          value={value}
          onChange={change}
          placeholder={placeholder}
        />
      )
    default:
      return (
        <StyledInput
          id={id}
          name={name}
          value={value}
          onChange={change}
          placeholder={placeholder}
        />
      )
  }
}

export default input
