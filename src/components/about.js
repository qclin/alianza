import React from "react"
import Blob from "../components/blob"

function About({ active, setActive }) {
  return (
    <a
      className={active === 0 ? "page-nav active" : "page-nav inactive"}
      href="/"
      key="home"
      onClick={() => setActive(0)}
    >
      <div className="nav-index top-nav-text">
        <span>00</span>
      </div>
      <section className={active == 0 ? "page-view active" : "page-view"}>
        <header id="logo">
          <h1 className="logoText mb0">alianza</h1>
          <h3 className="Subheader">
            para la Conservacion de los Bosques <br /> de Pino-Encino de
            Mesoamerica
          </h3>
        </header>
        <Blob />
      </section>
    </a>
  )
}

export default About
