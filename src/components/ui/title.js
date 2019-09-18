import React from "react"
import styled from "styled-components"

const H2Styled = styled.h2`
  font-size: 2em;
  width: 250px;
  margin: 40px auto;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;

  &:after {
    content: " ";
    display: block;
    width: 150px;
    height: 3px;
    background: rgba(51, 153, 255, 0.5);
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
    background: rgba(51, 153, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
    width: auto;
    height: auto;
    display: inline-block;
    margin: 15px auto;

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
