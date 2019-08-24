import React from "react"
import styled from "styled-components"

import MyImage from "./image"

const HeaderContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  color: white;
`

const header = () => {
  return (
    <HeaderContainer>
      <MyImage />
      testgs
    </HeaderContainer>
  )
}

export default header
