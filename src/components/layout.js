import React, { Component } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io"

import Header from "./header/header"
import SiteMetada from "../siteMetadata/siteMetadata"
import MobileMenu from "../components/menu/mobileMenu"
import { scrollToId } from "./shared/shared"

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
    color: rgb(39, 40, 46);
    font-family: 'Varela Round', sans-serif;
}
`

const PageWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-left: 25%;
  width: calc(70% - 25px);
  padding: 25px;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  position: fixed;
  left: calc(95% - 50px);
  top: 15px;
  z-index: 5;
  color: ${props => props.color};
  transition: 0.3s;

  svg {
    width: 50px;
    height: 50px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`

class Layout extends Component {
  state = {
    color: "white",
    menuActivated: false,
  }

  componentDidMount() {
    window.onscroll = () => {
      let color = "white"

      if (
        document.documentElement.scrollTop > window.innerHeight &&
        !this.state.menuActivated
      ) {
        color = "gray"
      }

      this.setState({ color: color })
    }
  }

  iconClick = () => {
    const { menuActivated } = this.state
    const newColor = menuActivated ? "gray" : "white"
    this.setState({ menuActivated: !menuActivated, color: newColor })
  }

  mobileMenuController = menuName => {
    scrollToId(menuName)
    this.iconClick()
  }

  render() {
    const { children } = this.props
    let { color, menuActivated } = this.state

    const icon = menuActivated ? <IoIosCloseCircleOutline /> : <IoMdMenu />

    return (
      <LayoutWrapper>
        <MobileMenuIcon
          onClick={this.iconClick}
          menuVisible={this.menuActivated}
          color={color}
        >
          {icon}
        </MobileMenuIcon>
        {
          <MobileMenu
            menuClick={this.mobileMenuController}
            visible={menuActivated}
          />
        }
        <SiteMetada />
        <Reset />
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </LayoutWrapper>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
