import React from "react"
import styled from "styled-components"

import SingleProject from "./singleProject/singleProject"
import Image from "./image"

const projects = () => {
  return (
    <div>
      <SingleProject title="test" description="testing">
        <Image />
      </SingleProject>
    </div>
  )
}

export default projects
