import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
`

const button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default button
