import React from "react"
import styled from "styled-components"

import Menu from "./menu"

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  visibility: none;
  position: absolute;
  z-index: 4;
`

const mobileMenu = () => {
  return (
    <MenuContainer>
      <Menu />
    </MenuContainer>
  )
}

export default mobileMenu
