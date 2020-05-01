import React from "react"

export default ({ data, active, setActive, themeIndex }) => {
  const { Identifier, Title, Summary, Description } = data

  return (
    <a
      className={
        active === themeIndex ? "page-nav active" : "page-nav inactive"
      }
      href={`#${Identifier}`}
      key={themeIndex}
      onClick={() => setActive(themeIndex)}
    >
      <div className="nav-index top-nav-text">
        <span>0{themeIndex}</span>
        <div className="vertical-text">{Identifier.replace(/_/g, " ")}</div>
      </div>
      <section
        className={active === themeIndex ? "page-view active" : "page-view"}
      >
        <div className="overlay"></div>
        <div className="content c-apple">
          <h1 className="Subheader">{Title}</h1>
          <h3 className="Subheader">{Summary}</h3>
          <p className="measure">{Description}</p>
        </div>
      </section>
    </a>
  )
}
