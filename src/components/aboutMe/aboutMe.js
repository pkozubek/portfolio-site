import React from "react"
import styled from "styled-components"

import Skills from "./skills/skills"
import { Container } from "../shared/shared"
import Button from "../ui/button"

const StyledH1 = styled.h1`
  text-align: center !important;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 25px;
`

const Paragraph = styled.p`
  text-align: justify;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 1.3em;
  line-height: 1.4;

  label {
    color: rgba(51, 153, 255, 0.5) !important;
  }

  button {
    margin-top: 20px !important;
    display: block;
  }
`

const projects = () => {
  return (
    <Container>
      <StyledH1>
        Jeśli szukasz front-end developera to trafiłeś idealnie!
      </StyledH1>
      <Paragraph>
        Jestem abitnym, stale podnaszącym swoje umiejętności programistą. Odkąd
        pamiętam, zawsze interesowałem się informatyka i programowaniem , a
        tworzenie przejrzystych i funkcjonalnych interfejsów, stało się moją
        najwiekszą pasją. Chętnie nawiąze współpracę z osobami, które tak jak
        ja, pragną się rozwijąć i nie lubią nudy. Jesteś zainteresowany/a
        naiązaniem współpracy? Chcesz dowiedzieć się o mnie czegoś więcej?
        Kliknij w kontakt, na pewno się odezwę!
        <Button>Kontakt</Button>
      </Paragraph>

      <Skills />
    </Container>
  )
}

export default projects
