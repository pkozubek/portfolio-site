import React from "react"
import Skills from "./skills/skills"
import { Container } from "../shared/shared"

const projects = () => {
  return (
    <Container>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis
        imperdiet nisi at dapibus. Aenean auctor odio tincidunt mi aliquet
        tristique. Suspendisse rhoncus, mauris in maximus fermentum, justo nisl
        porta tellus, vitae auctor justo risus eget dolor.
      </p>
      <Skills />
    </Container>
  )
}

export default projects
