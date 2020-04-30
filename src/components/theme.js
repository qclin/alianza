import React from "react"

export default ({ data, active }) => {
  const { Identifier, Title, Summary, Description } = data

  return (
    <section className={active ? "page-view active" : "page-view"}>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="Subheader">{Title}</h1>
        <h3 className="Subheader">{Summary}</h3>
        <p className="measure">{Description}</p>
      </div>
    </section>
  )
}
