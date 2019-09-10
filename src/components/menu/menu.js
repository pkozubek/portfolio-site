import React from "react"
import styled from "styled-components"

import { scrollToId } from "../shared/shared"

const StyledList = styled.ul`
  list-style: none;
  padding: 0 0 25px 0;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
    display: none;
  }
`

const SingleMenu = styled.li`
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 15px;
  transition: 1s;

  :hover::before {
    content: "<";
    color: rgba(51, 153, 255, 0.5);
    margin-right: 5px;
  }

  :hover::after {
    content: "/>";
    color: rgba(51, 153, 255, 0.5);
    margin-left: 5px;
  }

  :hover {
    font-size: 2em;
    transition: 1s;
    color: white;
    cursor: pointer;
  }
`

const menu = () => {
  return (
    <StyledList>
      <SingleMenu onClick={() => scrollToId("about_me")}>O mnie</SingleMenu>
      <SingleMenu onClick={() => scrollToId("experience")}>
        Doświadczenie
      </SingleMenu>
      <SingleMenu onClick={() => scrollToId("education")}>
        Wykształcenie
      </SingleMenu>
      <SingleMenu onClick={() => scrollToId("projects")}>Projekty</SingleMenu>
      <SingleMenu onClick={() => scrollToId("contact")}>Kontakt</SingleMenu>
    </StyledList>
  )
}

export default menu
