import React from "react"
import styled from "styled-components"

import SingleSkill from "./singleSkill"

const SkillsContainer = styled.div`
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  margin: 15px auto;
  border-radius: 25px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1640px) {
    width: 100%;
  }
`

const StyledH2 = styled.h2`
  width: auto;
  display: inline;
  margin: 0 auto;
  padding-bottom: 5px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`

const skills = () => {
  return (
    <>
      <StyledH2>Technologie w których mam doświadczenie:</StyledH2>
      <SkillsContainer>
        <SingleSkill
          haveBorder={true}
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React + Redux",
            "Axios",
            "Styled-Components",
            "jQuery",
          ]}
        />
        <SingleSkill
          haveBorder={true}
          title="Backend"
          skills={["PHP", "MySQL", "Firebase", "Oracle SQL", "PLSQL"]}
        />
        <SingleSkill
          haveBorder={false}
          title="Ucze się"
          skills={["Gatsby", "NodeJS"]}
        />
      </SkillsContainer>
    </>
  )
}

export default skills
