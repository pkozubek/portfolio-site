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
    height: calc(100vh - 25px);
    padding-top: 25px;
  }
`

const InfoWrapper = styled.div`
  color: white;
  width: 70%;
  margin: 15%;
  display: none;

  p {
    text-align: center;
  }
  label {
    color: rgb(51, 153, 255);
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    color: rgb(51, 153, 255);
  }

  @media (max-width: 768px) {
    display: block;

    p {
      margin: 0;
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
  }

  svg:hover {
    color: white;
    cursor: pointer;
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
        <a href={withPrefix("/cv.pdf")} target="_blank">
          <FaFileAlt />
        </a>
      </LinkWrapper>
      <InfoWrapper>
        <p>
          Jeśli szukasz ambitnego <label>frontend</label> developera to bardzo
          dobrze trafiłeś! Obecnie rozglądam się za pracą . Jeśli szukasz
          pasjonata <label>React</label> zajrzyj do działu{" "}
          <a href="#">Kontakt</a>, na pewno się odezwę!
        </p>
      </InfoWrapper>
      <Menu />
    </HeaderContainer>
  )
}

export default header
