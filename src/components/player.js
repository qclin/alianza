import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Player = ({ index }) => {
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
    data.name.includes(index)
  )
  const isVideo = mediaForTheme[0].extension === "mp4"

  return (
    <div id="media-player">
      {isVideo ? (
        <video autoPlay loop key={mediaForTheme[0].publicURL}>
          <source src={`${mediaForTheme[0].publicURL}`} type="video/mp4" />
        </video>
      ) : (
        mediaForTheme.map(image => (
          <Img
            className="w-100"
            key={image.name}
            fluid={image.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        ))
      )}
    </div>
  )
}

export default Player
