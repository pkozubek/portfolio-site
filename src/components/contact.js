import React, { Component } from "react"
import styled from "styled-components"

import Button from "../components/ui/button"
import Input from "../components/ui/input"
import Title from "../components/ui/title"

const ContactContainer = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
`

const FormContainer = styled.form`
  border: 1px solid black;
  width: 70%;

  input {
    width: 60%;
  }

  textarea {
    width: 80%;
  }
`

const InfoContainer = styled.div`
  width: 25%;
  border: 1px solid black;
`

const FormMessage = styled.div`
  width: 100%;
  border: 1px solid black;
`

class Contact extends Component {
  state = {}

  render() {
    return (
      <ContactContainer>
        <Title>Kontakt</Title>
        <FormMessage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis
          imperdiet nisi at dapibus. Aenean auctor odio tincidunt mi aliquet
          tristique. Suspendisse rhoncus, mauris in maximus fermentum, justo
          nisl porta tellus, vitae auctor justo risus eget dolor.
        </FormMessage>
        <FormContainer>
          <Input
            type="text"
            name="name"
            id="name"
            value=""
            placeholder="Your name"
          />
          <Input
            type="text"
            name="email"
            id="email"
            value=""
            placeholder="Your email"
          />
          <textarea></textarea>
          <Button>test</Button>
        </FormContainer>
        <InfoContainer />
      </ContactContainer>
    )
  }
}

export default Contact
