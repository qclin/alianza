import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SlideShow from "./slideshow"

const Player = ({ themeIndex, inline = false }) => {
  const media = useStaticQuery(graphql`
    query MediaQuery {
      files: allFile(filter: { sourceInstanceName: { eq: "media" } }) {
        nodes {
          extension
          size
          prettySize
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  `)
  const mediaForTheme = media.files.nodes.filter(data =>
    data.name.includes(themeIndex)
  )
  const isVideo = mediaForTheme[0].extension === "mp4"

  return (
    <div id="media-player" className={inline ? "mobile" : "desktop"}>
      {isVideo ? (
        <video autoPlay loop key={mediaForTheme[0].publicURL}>
          <source src={`${mediaForTheme[0].publicURL}`} type="video/mp4" />
        </video>
      ) : (
        <SlideShow images={mediaForTheme} />
      )}
    </div>
  )
}

export default Player
