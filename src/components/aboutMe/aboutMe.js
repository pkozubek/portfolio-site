import React from "react"
import styled from "styled-components"

import Skills from "./skills/skills"
import { Container, scrollToId } from "../shared/shared"
import Button from "../ui/button"

const StyledH1 = styled.h1`
  text-align: center !important;
  width: 90%;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 25px;

  @media (max-width: 1640px) {
    font-size: 1.8em;
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
  }

  @media (max-width: 400px) {
    font-size: 1.3em;
  }
`

const Paragraph = styled.p`
  text-align: justify;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 75px;
  font-size: 1.1em;
  line-height: 1.5;
  font-family: "Roboto Slab", serif;
  width: 80%;

  label {
    color: rgba(51, 153, 255, 0.5) !important;
  }

  button {
    margin-top: 20px !important;
    display: block;
  }

  @media (max-width: 1640px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    button {
      margin: 0 auto !important;
      margin-top: 20px !important;
    }
  }

  @media (max-width: 768px) {
    font-size: 1em;
    line-height: 1.3;
  }
`

const projects = () => {
  return (
    <Container id="about_me" data-aos="fade-out">
      <StyledH1>
        Jeśli szukasz front-end developera to trafiłeś idealnie!
      </StyledH1>
      <Paragraph>
        Jestem ambitnym, stale podnoszącym swoje umiejętności programistą. Odkąd
        pamiętam, zawsze interesowałem się informatyką i programowaniem, a
        tworzenie przejrzystych i funkcjonalnych interfejsów stało się moją
        największą pasją. Chętnie nawiążę współpracę z osobami, które tak jak ja
        pragną się rozwijąć i nie lubią nudy. Jesteś zainteresowany/a
        nawiązaniem współpracy? Chcesz dowiedzieć się o mnie czegoś więcej?
        Kliknij w kontakt, na pewno się odezwę!
        <Button centered={true} action={() => scrollToId("contact")}>
          Kontakt
        </Button>
      </Paragraph>
      <Skills />
    </Container>
  )
}

export default projects
