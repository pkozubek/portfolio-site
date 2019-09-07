import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  border: 2px solid rgba(51, 153, 255, 0.4);

  img {
    object-fit: fill !important;
  }
`

const Wrapper = styled.figure`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <StyledImg fluid={data.me.childImageSharp.fluid}></StyledImg>
    </Wrapper>
  )
}

export default Image
