import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header/header"

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
  margin-left: 30%;
  width: calc(70% - 25px);
  padding: 25px;
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
