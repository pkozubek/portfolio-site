import React from "react"
import styled from "styled-components"
import { FaChrome, FaDatabase } from "react-icons/fa"
import { IoIosBulb } from "react-icons/io"

const Container = styled.div`
  width: 33%;
  border-right: ${props =>
    props.haveBorder ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
  text-align: center;

  svg {
    margin: 25px 0 0 0;
    height: 45px !important;
    width: 45px !important;
  }

  ul {
    list-style-type: none;
    padding: 10px 0 10px 0;
  }

  li {
    display: block;
    text-align: center;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    svg {
      margin: 15px 0 0 0;
    }

    ul {
      font-size: 0.9em;
      padding: 5px 0 5px 0;
    }
  }

  @media (max-width: 400px) {
    svg {
      width: 30px !important;
      height: 30px !important;
    }

    ul {
      font-size: 0.8em;
    }
  }
`

const Name = styled.h3`
  margin: 5px 0 5px 0;
  padding: 0;
  color: rgba(51, 153, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

const singleSkill = ({ title, haveBorder, skills }) => {
  let icon = null
  switch (title) {
    case "Frontend":
      icon = <FaChrome />
      break
    case "Backend":
      icon = <FaDatabase />
      break
    case "Ucze się":
      icon = <IoIosBulb />
      break
  }

  return (
    <Container haveBorder={haveBorder}>
      {icon}
      <Name>{title}</Name>
      <ul>
        {skills.map(singleSkill => {
          return <li key={singleSkill}>{singleSkill}</li>
        })}
      </ul>
    </Container>
  )
}

export default singleSkill
