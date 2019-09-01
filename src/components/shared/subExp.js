import React from "react"
import styled from "styled-components"

import { FaRegCircle } from "react-icons/fa"
import SubSingleExperience from "./shared"

const subExp = ({ children }) => {
  return (
    <div>
      <FaRegCircle />
      <SubSingleExperience>{children}</SubSingleExperience>
    </div>
  )
}

export default subExp
