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
  padding: 5px;
  margin: 25px 0;
`

const handleMessageSend = event => {
  event.preventDefault()
  console.log("click")
}

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
      <ContactContainer data-aos="fade-out">
        <Title>Kontakt</Title>
        <FormMessage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis
          imperdiet nisi at dapibus. Aenean auctor odio tincidunt mi aliquet
          tristique. Suspendisse rhoncus, mauris in maximus fermentum, justo
          nisl porta tellus, vitae auctor justo risus eget dolor.
        </FormMessage>
        <FormContainer>
          {renderedForm}
          <Button disabled={!isFormValid} action={handleMessageSend}>
            test
          </Button>
        </FormContainer>
        <InfoContainer />
      </ContactContainer>
    )
  }
}

export default Contact
