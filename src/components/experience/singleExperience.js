import React from "react"
import styled from "styled-components"

import { SingleExpEduContainer } from "../shared/shared"
import SubExp from "../shared/subExp"

const JobDescription = styled.p`
  width: 90%;
  color: rgba(51, 153, 255, 0.45);
`

const singleExperience = ({
  datesText,
  endDate,
  startDate,
  companyName,
  description,
  titles,
}) => {
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

  const singleTitle =
    titles.length === 1 ? (
      <h3>{titles[0].title}</h3>
    ) : (
      <h3>{titles[0].title + " , " + titles[1].title}</h3>
    )

  const multipleTitles =
    titles.length > 1
      ? titles.map(singleTitle => {
          const { title, date } = singleTitle
          return (
            <SubExp destination="experience" key={title}>
              <h3>{title}</h3>
              <p>{date}</p>
            </SubExp>
          )
        })
      : null

  return (
    <>
      <SingleExpEduContainer>
        <h2>{companyName}</h2>
        {singleTitle}
        <JobDescription>{description}</JobDescription>
        <p>{calculateMonths(diffDays)}</p>
        <label>{datesText}</label>
      </SingleExpEduContainer>
      {multipleTitles}
    </>
  )
}

export default singleExperience
