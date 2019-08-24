import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.me.childImageSharp.fluid} />
}

export default Image

/*
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    project1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...squareImage
    }
    project2: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...squareImage
    }
    project3: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...squareImage
    }
  }
`*/
