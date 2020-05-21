import React from "react"
import Player from "./player"

export default ({ data, active, setActive, themeIndex }) => {
  const { Identifier, Title, Subtitle, Description } = data
  let style = "theme-page menu-row "
  return (
    <a
      className={active === themeIndex ? style + "active" : style + "inactive"}
      href={`#${Identifier}`}
      key={themeIndex}
      onClick={() => setActive(themeIndex)}
    >
      <div className="nav-index top-nav-text">
        <div className="vertical-text">
          {Identifier} {Title}
        </div>
      </div>
      <section
        className={active === themeIndex ? "page-view active" : "page-view"}
      >
        <div className="overlay"></div>
        <div className="content c-apple">
          <h1 className="sub-header-text title ph3">
            {Title} <span className="fr dib mobile">0{themeIndex}</span>
          </h1>
          {themeIndex && active == themeIndex && (
            <Player themeIndex={themeIndex} inline />
          )}
          <h3 className="sub-heaeder-text ph3 pt3">{Subtitle}</h3>
          <p className="measure pa3 mb5">{Description}</p>
        </div>
      </section>
    </a>
  )
}
