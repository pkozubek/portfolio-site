import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SingleProject from "./singleProject/singleProject"
import FormatedImage from "./formatedImg"
import Title from "../ui/title"
import singleProject from "./singleProject/singleProject"

const ProjectContainer = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
`
const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const projects = () => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  const projects = [
    {
      tags: ["javascript", "react"],
      title: "test",
      image: data.project1.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux"],
      title: "test2",
      image: data.project2.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react"],
      title: "test",
      image: data.project1.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux"],
      title: "test2",
      image: data.project2.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react"],
      title: "test",
      image: data.project1.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux"],
      title: "test2",
      image: data.project2.childImageSharp.fluid,
    },
  ]

  return (
    <ProjectContainer data-aos="fade-out">
      <Title>Projekty</Title>
      <ProjectWrapper>
        {projects.map(singleProject => {
          const { tags, title, image } = singleProject
          return (
            <SingleProject tags={tags} title="test">
              <FormatedImage fluidImage={image} />
            </SingleProject>
          )
        })}
      </ProjectWrapper>
    </ProjectContainer>
  )
}

export default projects
