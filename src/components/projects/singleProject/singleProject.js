import React from "react"
import styled from "styled-components"

const SingleProjectWrapper = styled.div`
  width: 25%;
  margin-right: 5%;
  height: auto;
  box-shadow: 0 0 10px lightgray;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0 0 25px lightgray;
  }

  h3 {
    color: gray;
    text-align: center;
  }
`

const ProjectContent = styled.div`
  width: 100%;
`
const StyledImage = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`
const StyledLabel = styled.label`
  border: 2px solid lightgray;
  border-radius: 8px;
  margin: 5px;
  padding: 5px;
`

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const singleProject = ({ children, title, tags }) => {
  return (
    <SingleProjectWrapper>
      <StyledImage>{children}</StyledImage>
      <ProjectContent>
        <h3>{title}</h3>
        <TagsWrapper>
          {tags.map(singleTag => {
            return <StyledLabel>{singleTag}</StyledLabel>
          })}
        </TagsWrapper>
      </ProjectContent>
    </SingleProjectWrapper>
  )
}

export default singleProject
