import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Date = () => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  return <h6>Last updated: {data.currentBuildDate.currentDate}</h6>
}

export default Date
