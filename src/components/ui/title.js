import React from "react"
import styled from "styled-components"

const H2Styled = styled.h2`
  font-size: 2em;
  margin: 25px auto;
  color: gray;
  text-align: center;

  &:after {
    content: " ";
    width: 150px;
    height: 1px;
    background: gray;
    position: relative;
    top: -50%;
    left: -150px;
    display: block;
  }

  &:before {
    content: " ";
    display: block;
    width: 150px;
    height: 1px;
    position: relative;
    top: 50%;
    left: 100%;
    background: gray;
  }
`

const title = ({ children }) => {
  return <H2Styled>{children}</H2Styled>
}

export default title
