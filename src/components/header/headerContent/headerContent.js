import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby"
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"

import MyImage from "./image"
import Menu from "../../menu/menu"

const HeaderContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: white;
  padding-top: 25%;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 1.3em;
  }

  h2 {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;

    h1 {
      margin-block-end: 0.1em;
      width: 100%;
      font-size: 1.4em;
    }
    h2 {
      margin-block-end: 0.1em;
      font-size: 1.2em;
      width: 100%;
    }
  }
`

const LinkWrapper = styled.div`
  text-align: center;
  svg {
    margin: 5px;
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.4s;
  }

  svg:hover {
    color: white;
    cursor: pointer;
    transition: all 0.4s;
  }

  @media (max-width: 768px) {
    width: 100%;

    svg {
      width: 25px;
      height: 25px;
      margin: 10px;
    }
  }
`

const header = () => {
  return (
    <HeaderContainer>
      <MyImage />
      <h1>Paweł Kozubek</h1>
      <h2>Frontend Developer</h2>
      <LinkWrapper>
        <a href="https://github.com/pkozubek">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pawel-kozubek92/">
          <FaLinkedin />
        </a>
        <a
          href={withPrefix("/cv.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt />
        </a>
      </LinkWrapper>
      <Menu />
    </HeaderContainer>
  )
}

export default header
