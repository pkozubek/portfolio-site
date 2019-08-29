import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

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

const Wrapper = styled.figure`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
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

  ${Wrapper}:hover & {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all -color 0.6s ease-in;
  }
`

const Image = ({ fluidImage }) => {
  return (
    <Wrapper>
      <StyledImg fluid={fluidImage}></StyledImg>
      <HoverDiv>TEST</HoverDiv>
    </Wrapper>
  )
}

export default Image
