import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  width: 100vw;
  height: ${props => (props.visible === true ? "100vh" : "0")};
  background: black;
  position: fixed;
  z-index: 4;
  visibility: ${props => (props.visible === true ? "visible" : "hidden")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${props => (props.visible === true ? "1" : "0")};
  transition: all 0.2s linear;

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
