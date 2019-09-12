import React from "react"

import { FaRegCircle } from "react-icons/fa"
import { SubSingleExperience } from "./shared"

const subExp = ({ children, destination }) => {
  console.log(destination)
  return (
    <>
      <FaRegCircle />
      <SubSingleExperience destination={destination}>
        {children}
      </SubSingleExperience>
    </>
  )
}

export default subExp
