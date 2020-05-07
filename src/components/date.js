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

  return <p>Last updated: {data.currentBuildDate.currentDate}</p>
}

export default Date
