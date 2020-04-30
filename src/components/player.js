import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        }
      }
    }
  `)

  const mediaForTheme = media.files.nodes.filter(data =>
    data.name.includes(index)
  )
  const isVideo = mediaForTheme[0].extension == "mp4"

  return (
    <div id="media-player">
      {isVideo ? (
        <video autoPlay loop>
          <source
            src={`/media/${mediaForTheme[0].relativePath}`}
            type="video/mp4"
          />
        </video>
      ) : (
        mediaForTheme.map(image => (
          <img key={image.name} src={`/media/${image.relativePath}`} />
        ))
      )}
    </div>
  )
}

export default Player
