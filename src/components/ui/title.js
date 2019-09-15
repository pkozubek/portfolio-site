import React from "react"
import styled from "styled-components"

const H2Styled = styled.h2`
  font-size: 2em;
  width: 250px;
  margin: 25px auto;
  color: rgb(39, 40, 46);
  text-align: center;

  &:after {
    content: " ";
    display: block;
    width: 150px;
    height: 3px;
    background: gray;
    position: relative;
    top: -50%;
    left: -150px;
  }

  &:before {
    content: " ";
    display: block;
    width: 150px;
    height: 3px;
    position: relative;
    top: calc(50% - 3px);
    left: 100%;
    background: gray;
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
    width: auto;
    height: auto;
    display: inline-block;

    :before {
      width: 60px;
      height: 3px;
      left: -80px;
    }

    :after {
      width: 60px;
      height: 3px;
      left: calc(100% + 20px);
    }
  }
`

const title = ({ children }) => {
  return <H2Styled>{children}</H2Styled>
}

export default title
