import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SingleProject from "./singleProject/singleProject"
import FormatedImage from "./formatedImg"
import Title from "../ui/title"
import singleProject from "./singleProject/singleProject"
import { Container } from "../shared/shared"

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const projects = () => {
  const data = useStaticQuery(graphql`
    query {
      beerguru: file(relativePath: { eq: "beerguru.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memegenerator: file(relativePath: { eq: "meme-generator.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal: file(relativePath: { eq: "meal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doge: file(relativePath: { eq: "doge.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      burgerapp: file(relativePath: { eq: "burgerapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      racing: file(relativePath: { eq: "racing.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      tags: ["javascript", "react", "redux", "fetch"],
      title: "Beerguru",
      image: data.beerguru.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux"],
      title: "Meme-generator",
      image: data.memegenerator.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "fetch", "infinite-scroll"],
      title: "Infinite-Doge",
      image: data.doge.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "fetch"],
      title: "Meal-suggestion",
      image: data.meal.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "fetch", "redux"],
      title: "Burger app(course)",
      image: data.burgerapp.childImageSharp.fluid,
    },
    {
      tags: ["C#", "Unity"],
      title: "Racing Game",
      image: data.racing.childImageSharp.fluid,
    },
  ]

  return (
    <Container data-aos="fade-out">
      <Title>Projekty</Title>
      <ProjectWrapper>
        {projects.map(singleProject => {
          const { tags, title, image } = singleProject
          return (
            <SingleProject key={title} tags={tags} title={title}>
              <FormatedImage fluidImage={image} />
            </SingleProject>
          )
        })}
      </ProjectWrapper>
    </Container>
  )
}

export default projects
