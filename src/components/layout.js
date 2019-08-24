import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header/header"

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0;
  margin: 0;
`

const Reset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
}
`

const PageWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  padding-left: 15px;
  width: calc(65vw - 15px);
  margin-left: 30vw;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Reset />
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
