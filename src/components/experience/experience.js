import React from "react"

import Title from "../ui/title"
import SingleExperience from "./singleExperience"
import { Container, Content } from "../shared/shared"

const experience = () => {
  return (
    <Container id="experience" data-aos="fade-out">
      <Title>Doświadczenie</Title>
      <Content>
        <SingleExperience
          companyName="NSK Bearings Polska S.A."
          startDate={[2018, 1, 1]}
          endDate={null}
          datesText="02.2018 - obecnie"
          description="Praca Zarówno z Frontem i Back-endem (jQuery + PHP + SQL), tworzenie systemów wspomagających zamówienia, zapytań czy procedur SQL a także responsywnych interfejsów dostosowanych pod urządzenia mobilne(RWD). Poprawki w systemach raportowych, kontakt z biznesem w celu ustalenia specyfiki rozwiązania"
          titles={[
            { title: "Senior Developer Analyst", date: "04.2019 - obecnie" },
            { title: "Developer", date: "02.2018 - 04.2019" },
          ]}
        />
        <SingleExperience
          companyName="Uti.pl"
          startDate={[2015, 8, 1]}
          endDate={[2015, 10, 30]}
          description="Przenoszenie stron pomędzy hostingami , proste poprawki wizualne, kontakt z klientem"
          datesText="08.2015 - 11.2015"
          titles={[{ title: "Pracownik Działu IT" }]}
        />
        <SingleExperience
          companyName="Echo Dnia"
          startDate={[2013, 7, 1]}
          endDate={[2013, 9, 30]}
          description="Osoba techniczna"
          datesText="07.2013 - 10.2013"
          titles={[{ title: "Informatyk" }]}
        />
      </Content>
    </Container>
  )
}

export default experience
