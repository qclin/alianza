import React from "react"
import Player from "./player"

export default ({ data, isActive, themeIndex }) => {
  const { Identifier, Title, Subtitle, Description } = data
  return (
    <>
      <div className="preview">
        <div className="preview--inner">
          <span> {Identifier}</span>
          <div className="vertical-text ">{Title}</div>
        </div>
      </div>
      <section className="page-view">
        <div className="overlay"></div>
        <div className="content c-apple">
          <h1 className="sub-header-text title ph3">
            {Title} <span className="fr dib mobile">0{themeIndex}</span>
          </h1>
          <div className="scroll-content">
            {isActive && <Player themeIndex={themeIndex} inline />}
            <h3 className="sub-heaeder-text ph3 pt3">{Subtitle}</h3>
            <p className="measure pa3 mb5">{Description}</p>
          </div>
        </div>
      </section>
    </>
  )
}
