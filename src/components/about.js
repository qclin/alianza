import React from "react"
import Blob from "../components/blob"

function About() {
  return (
    <>
      <div className="preview pa2">
        <div className="preview--inner">
          <span>00</span>
        </div>
      </div>
      <section className="page-view">
        <header id="logo">
          <h1 className="logo-text mb0">alianza</h1>
          <h3 className="Subheader">
            para la Conservacion de los Bosques <br /> de Pino-Encino de
            Mesoamerica
          </h3>
        </header>
        <Blob />
        <footer>
          © {new Date().getFullYear()}, Support by{" "}
          <a href="https://theholding.page">Hold</a>
        </footer>
      </section>
    </>
  )
}

export default About
