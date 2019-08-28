import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import HeaderContent from "./headerContent/headerContent"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "klawiatura.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <HeaderContent />
        </BackgroundImage>
      )
    }}
  />
)

const HeaderContainer = styled(BackgroundSection)`
  width: 25%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  position: fixed !important;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: static !important;
    width: 100%;
    height: 100vh;
  }
`

export default HeaderContainer
