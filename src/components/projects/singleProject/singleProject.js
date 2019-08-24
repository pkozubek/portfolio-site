import React from "react"
import styled from "styled-components"

const SingleProjectWrapper = styled.div`
  width: 100px;
  height: 150px;
  border: 1px solid black;
`

const ProjectContent = styled.div``
const StyledImage = styled.div``

const singleProject = ({ children, title, tags, description }) => {
  return (
    <SingleProjectWrapper>
      <StyledImage>{children}</StyledImage>
      <ProjectContent>
        <p>{title}</p>
        <p>{description}</p>
        <div>{tags}</div>
      </ProjectContent>
    </SingleProjectWrapper>
  )
}

export default singleProject
