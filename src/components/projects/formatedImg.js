import React from "react"
import Link from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaCode, FaDesktop } from "react-icons/fa"

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
  border: 1px solid lightgray;
  box-sizing: border-box;
  z-index: 1;

  img {
    object-fit: fill !important;
  }
`

const IconContainer = styled.div`
  width: 30px;
  margin: 10px;
  cursor: pointer;

  svg {
    color: rgba(255, 255, 255, 0.6);
    width: 30px;
    height: 30px;
  }

  p {
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8em;
    text-align: center;
  }

  :hover {
    svg {
      color: white;
    }

    p {
      color: white;
    }
  }
`

const Wrapper = styled.figure`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;

  a {
    text-decoration: none;
  }
`

const HoverDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  visibility: hidden;
  background-color: transparent;
  transition: all 0.2s ease-in;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${Wrapper}:hover & {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all -color 0.6s ease-in;
  }
`

const Image = ({ fluidImage, links }) => {
  //const
  const code =
    links.code != null ? (
      <a href={links.code}>
        <IconContainer>
          <FaCode />
          <p>Code</p>
        </IconContainer>
      </a>
    ) : null

  const demo =
    links.demo != null ? (
      <a href={links.demo}>
        <IconContainer>
          <FaDesktop />
          <p>Demo</p>
        </IconContainer>
      </a>
    ) : null

  return (
    <Wrapper>
      <StyledImg fluid={fluidImage}></StyledImg>
      <HoverDiv>
        {code}
        {demo}
      </HoverDiv>
    </Wrapper>
  )
}

export default Image
