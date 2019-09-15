import React from "react"

import { FaRegCircle } from "react-icons/fa"

import Title from "../ui/title"
import { Container, Content } from "../shared/shared"
import { SingleExpEduContainer, SubSingleExperience } from "../shared/shared"

const education = () => {
  return (
    <Container id="education" data-aos="fade-out">
      <Title>Wykształcenie</Title>
      <Content>
        <SingleExpEduContainer>
          <h2>Politechnika Świętokrzyska w Kielcach</h2>
          <h3>Informatyka</h3>
          <label>2012-2017</label>
        </SingleExpEduContainer>
        <FaRegCircle />
        <SubSingleExperience destination="education">
          <h3>Studia Magisterskie</h3>
          <p>2015 - 2017</p>
        </SubSingleExperience>
        <FaRegCircle />
        <SubSingleExperience destination="education">
          <h3>Studia Inżynierskie</h3>
          <p>2012 - 2015</p>
        </SubSingleExperience>
      </Content>
    </Container>
  )
}

export default education
