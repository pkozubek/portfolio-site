import React, { Component } from "react"
import styled from "styled-components"
import { FaLinkedin, FaPhoneSquare, FaEnvelope } from "react-icons/fa"

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
  width: 100%;

  input {
    width: 60%;
  }

  textarea {
    width: 80%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input {
      width: 95%;
    }

    textarea {
      width: 100%;
    }
  }
`

const InfoContainer = styled.div`
  width: calc(35% - 30px);
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.9em;
    margin-left: 30px;
    display: flex;
    align-items: center;
  }

  a {
    color: gray;
    text-decoration: none;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 25px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    width: auto;
  }
`

const FormMessage = styled.div`
  width: 100%;
  padding: 5px;
  margin: 25px 0;
  text-align: center;
`

class Contact extends Component {
  state = {
    form: {
      name: {
        value: "",
        type: "text",
        placeholder: "Your name",
        validationRules: {
          required: true,
          rules: {
            maxLength: 30,
          },
        },
        isModed: false,
        isValid: false,
      },
      email: {
        value: "",
        type: "text",
        placeholder: "Your email",
        validationRules: {
          required: true,
          rules: {
            maxLength: 50,
            isEmail: true,
          },
        },
        isModed: false,
        isValid: false,
      },
      message: {
        value: "",
        type: "textarea",
        placeholder: "Your message",
        validationRules: {
          required: true,
          rules: {
            maxLength: 300,
          },
        },
        isModed: false,
        isValid: false,
      },
    },
    isFormValid: false,
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  checkIfCorrect = (value, validationRules) => {
    let isCorrect = true

    if (validationRules) {
      const { rules } = validationRules
      if (value.length < 5) {
        isCorrect = false
      }

      if (rules.isEmail) {
        isCorrect = this.validateEmail(value) && isCorrect
      }
      if (rules.maxLength) {
        isCorrect = value.length < rules.maxLength && isCorrect
      }
    }

    return isCorrect
  }

  handleInputChange = event => {
    const { id, value } = event.target

    const newFormState = { ...this.state.form }
    const newInputState = { ...this.state.form[event.target.id] }
    const { validationRules } = newInputState

    newInputState.value = value
    newInputState.isModed = true
    newInputState.isValid = this.checkIfCorrect(value, validationRules)

    newFormState[id] = newInputState

    let isFormValid = true
    for (let singleInputId in newFormState) {
      isFormValid = newFormState[singleInputId].isValid && isFormValid
    }

    this.setState({
      form: newFormState,
      isFormValid: isFormValid,
    })
  }

  render() {
    const { form, isFormValid } = this.state

    const formArray = []

    for (let singleInputId in form) {
      formArray.push({
        uniqueName: singleInputId,
        config: form[singleInputId],
      })
    }

    const renderedForm = formArray.map(singleInput => {
      const { uniqueName } = singleInput
      const { placeholder, value, type } = singleInput.config
      return (
        <Input
          key={uniqueName}
          type={type}
          name={uniqueName}
          id={uniqueName}
          value={value}
          placeholder={placeholder}
          change={event => this.handleInputChange(event)}
        />
      )
    })

    return (
      <ContactContainer id="contact" data-aos="fade-out">
        <Title>Kontakt</Title>
        <FormMessage>
          Spodobały ci się moje projekty? Chciałbyś nawiązać współprace?
          Skontaktuj się ze mną!
        </FormMessage>
        <FormContainer
          method="post"
          action="https://formspree.io/pkozubek92@gmail.com"
        >
          {renderedForm}
          <Button disabled={!isFormValid}>Wyślij</Button>
        </FormContainer>
        <InfoContainer>
          <p>
            <FaLinkedin />{" "}
            <a href="https://www.linkedin.com/in/pawel-kozubek92/">
              pawel-kozubek92
            </a>
          </p>
          <p>
            <FaPhoneSquare /> 660946196
          </p>
          <p>
            <FaEnvelope /> pkozubek92@gmail.com
          </p>
        </InfoContainer>
      </ContactContainer>
    )
  }
}

export default Contact
