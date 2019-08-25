import React from "react"
import styled from "styled-components"

import SingleProject from "./singleProject/singleProject"
import Image from "./image"
import Title from "../ui/title"

const ProjectContainer = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
`
const ProjectWrapper = styled.div`
  width: 100%;
`

const projects = () => {
  return (
    <ProjectContainer>
      <Title>Projekty</Title>
      <ProjectWrapper>
        <SingleProject
          tags={["javascript", "react"]}
          title="test"
          description="testing"
        >
          <Image />
        </SingleProject>
      </ProjectWrapper>
    </ProjectContainer>
  )
}

export default projects
