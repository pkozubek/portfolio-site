import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: fixed;
  z-index: 4;
  display: ${props => (props.visible === true ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 1s;

  @media (min-width: 769px) {
    display: none;
  }
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0 0 25px 0;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  z-index: 10;
`
const SingleMenu = styled.li`
  color: rgba(255, 255, 255);
  font-size: 1.4em;
  padding-bottom: 25px;
  transition: 1s;
`

const mobileMenu = props => {
  const { visible, menuClick } = props

  return (
    <MenuContainer visible={visible}>
      <StyledList>
        <SingleMenu onClick={() => menuClick("about_me")}>O mnie</SingleMenu>
        <SingleMenu onClick={() => menuClick("experience")}>
          Doświadczenie
        </SingleMenu>
        <SingleMenu onClick={() => menuClick("education")}>
          Wykształcenie
        </SingleMenu>
        <SingleMenu onClick={() => menuClick("projects")}>Projekty</SingleMenu>
        <SingleMenu onClick={() => menuClick("contact")}>Kontakt</SingleMenu>
      </StyledList>
    </MenuContainer>
  )
}

export default mobileMenu
