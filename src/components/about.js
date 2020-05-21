import React from "react"
import Blob from "../components/blob"

function About({ active, setActive, setMenuVisible }) {
  const styles = "menu-row theme-page container "
  return (
    <div className={active === 0 ? styles + "is-active " : styles + "inactive"}>
      <a
        href="/"
        key="home"
        onClick={() => {
          setActive(0)
          setMenuVisible(false)
        }}
      >
        <div className="nav-index preview">
          <span>00</span>
        </div>
        <section className={active === 0 ? "page-view active" : "page-view"}>
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
      </a>
    </div>
  )
}

export default About
