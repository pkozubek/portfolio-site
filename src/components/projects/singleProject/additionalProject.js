import React from "React"
import styled from "styled-components"
import { FaCode, FaDesktop } from "react-icons/fa"
import { StyledLabel } from "./shared"

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 5px 0 10px 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h3 {
    padding: 10px;
    width: auto;
    display: inline-block;
  }
  h3:after {
    content: " ";
    display: block;
    width: 60px;
    height: 3px;
    margin: 5px 0 0 5px;
    background: rgba(51, 153, 255, 0.5);
  }
`

const TagsContainer = styled.div`
  width: 100%;
  height: 40px;
`

const additionalProject = ({ name, repo, demo, tags }) => {
  return (
    <>
      <Container>
        <h3>{name}</h3>
        <a href={repo}>
          <FaCode />
        </a>
        <a href={demo}>
          <FaDesktop />
        </a>
        <TagsContainer>
          {tags.map(singleTag => {
            return <StyledLabel key={singleTag}>{singleTag}</StyledLabel>
          })}
        </TagsContainer>
      </Container>
    </>
  )
}

export default additionalProject
