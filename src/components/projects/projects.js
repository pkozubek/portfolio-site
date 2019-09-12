import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SingleProject from "./singleProject/singleProject"
import FormatedImage from "./formatedImg"
import Title from "../ui/title"
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
      tags: ["javascript", "react", "redux", "axios"],
      title: "Beerguru",
      links: {
        code: "https://github.com/pkozubek/bear-guru",
        demo: "https://pkozubek.github.io/bear-guru/",
      },
      image: data.beerguru.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux"],
      title: "Meme-generator",
      links: {
        code: "https://github.com/pkozubek/react-js-meme-generator",
        demo: "https://pkozubek.github.io/react-js-meme-generator/",
      },
      image: data.memegenerator.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "redux", "axios", "material-ui"],
      title: "Infinite-Doge",
      links: {
        code: "https://github.com/pkozubek/infinite-doge",
        demo: "https://pkozubek.github.io/infinite-doge/",
      },
      image: data.doge.childImageSharp.fluid,
    },
    {
      tags: ["javascript", "react", "axios"],
      title: "Meal-suggestion",
      links: {
        code: "https://github.com/pkozubek/meal-suggestion",
        demo: "https://pkozubek.github.io/meal-suggestion/",
      },
      image: data.meal.childImageSharp.fluid,
    },

    {
      tags: ["javascript", "axios", "redux"],
      title: "Burger app(course)",
      links: {
        code: "https://github.com/pkozubek/burgerapp",
        demo: "https://pkozubek.github.io/burgerapp/",
      },
      image: data.burgerapp.childImageSharp.fluid,
    },

    {
      tags: ["C#", "Unity"],
      title: "Racing Game",
      links: {
        code: "https://github.com/pkozubek/projekt_inzynierski",
        demo:
          "https://github.com/pkozubek/projekt_inzynierski/archive/master.zip",
      },
      image: data.racing.childImageSharp.fluid,
    },
  ]

  return (
    <Container id="projects" data-aos="fade-out">
      <Title>Projekty</Title>
      <ProjectWrapper>
        {projects.map(singleProject => {
          const { tags, title, image, links } = singleProject
          return (
            <SingleProject key={title} tags={tags} title={title}>
              <FormatedImage links={links} fluidImage={image} />
            </SingleProject>
          )
        })}
      </ProjectWrapper>
    </Container>
  )
}

export default projects
