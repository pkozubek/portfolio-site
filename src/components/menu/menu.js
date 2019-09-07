import React from "react"
import styled from "styled-components"

const StyledList = styled.ul`
  list-style: none;
  padding: 0 0 25px 0;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
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
      <SingleMenu>O mnie</SingleMenu>
      <SingleMenu>Doświadczenie</SingleMenu>
      <SingleMenu>Wykształcenie</SingleMenu>
      <SingleMenu>Projekty</SingleMenu>
      <SingleMenu>Kontakt</SingleMenu>
    </StyledList>
  )
}

export default menu
