import React from "react"
import styled from "styled-components"

import { SingleExpEduContainer } from "../shared/shared"
//import SubExp from "../shared/subExp"

const singleExperience = ({ endDate, startDate, companyName, description }) => {
  const printDate = startDate => {}

  const calculateMonths = days => {
    const daysInYear = 365
    const year = Math.floor(days / daysInYear)
    const month = Math.floor((days - year * daysInYear) / 30)

    let yearDisplay = null

    if (year > 0) {
      yearDisplay = year > 1 ? year + " lata" : year + " rok"
    }

    const monthDisplay = month > 5 ? month + " miesięcy" : month + " miesiące"
    return year > 0 ? yearDisplay + " " + monthDisplay : monthDisplay
  }

  let formatedEnd = endDate !== null ? new Date(endDate) : Date.now()

  const diffTime = Math.abs(formatedEnd - new Date(startDate).getTime())

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  const singleDescription =
    description.length === 1 ? <h3>{description[0].title}</h3> : null
  /*
  const multipleDescription =
    description.length > 1
      ? description.map(singleDescription => {
          const { title } = singleDescription

          console.log(title, "title")
          return (
            <SubExp>
              <p>test</p>
            </SubExp>
          )
        })
      : null*/

  return (
    <>
      <SingleExpEduContainer>
        <h2>{companyName}</h2>
        {singleDescription}
        <p>{calculateMonths(diffDays)}</p>
      </SingleExpEduContainer>
    </>
  )
}

export default singleExperience
