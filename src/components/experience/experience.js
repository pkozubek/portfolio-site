import React from "react"

import Title from "../ui/title"
import SingleExperience from "./singleExperience"
import { Container, Content } from "../shared/shared"

const experience = () => {
  return (
    <Container data-aos="fade-out">
      <Title>Doświadczenie</Title>
      <Content>
        <SingleExperience
          companyName="NSK Bearings Polska S.A."
          startDate={[2018, 1, 1]}
          endDate={null}
          description={[
            { title: "Senior Developer Analyst", date: "04.2019 - obecnie" },
            { title: "Developer", date: "02.2018 - 04.2019" },
          ]}
        />
        <SingleExperience
          companyName="Uti.pl"
          startDate={[2015, 8, 1]}
          endDate={[2015, 10, 30]}
          description={[{ title: "Pracownik Działu IT" }]}
        />
        <SingleExperience
          companyName="Echo Dnia"
          startDate={[2013, 7, 1]}
          endDate={[2013, 9, 30]}
          description={[{ title: "Informatyk" }]}
        />
      </Content>
    </Container>
  )
}

export default experience
