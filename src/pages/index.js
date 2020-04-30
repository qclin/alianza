import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Themes from "../components/themes"
import LangaugeToggle from "../components/languageToggle"
import { languageOptions } from "../utils/languageOptions"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      themes: allAirtable(
        filter: { table: { eq: "THEMES" } }
        sort: { fields: data___Identifier }
      ) {
        nodes {
          data {
            Description
            Identifier
            Summary
            Title
            Language
          }
        }
      }
    }
  `)
  const [language, setLanguage] = useState(languageOptions.ES)
  const dataEntries = data.themes.nodes.filter(
    item => item.data.Language === language
  )

  return (
    <Layout>
      <LangaugeToggle setLanguage={setLanguage} />
      <Themes dataEntries={dataEntries}></Themes>
    </Layout>
  )
}

export default IndexPage
