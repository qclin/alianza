import React, { useState } from "react"

import Theme from "./theme"
import Player from "./player"
import About from "./about"

const Themes = ({ dataEntries }) => {
  const [active, setActive] = useState(0)
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <div>
      {active > 0 && <Player themeIndex={active} />}
      <section className="page-wrapper">
        <About active={active} setActive={setActive} />
        {dataEntries.map((node, index) => (
          <Theme
            key={index}
            data={node.data}
            active={active}
            setActive={setActive}
            themeIndex={index + 1}
          />
        ))}
      </section>
      <section id="mobile-navigation">
        <div id="docked-menu">
          <button
            className="c-apple"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {" "}
            menu
          </button>
        </div>
        <div id="menu-selection" className={menuVisible ? "show" : "hide"}>
          <a href="/" onClick={() => setActive(0)}>
            00
          </a>
          {dataEntries.map((node, index) => (
            <div key={node.data.Identifier} className="menu-row pa3">
              <a
                href={`#${index}`}
                onClick={() => {
                  setActive(index + 1)
                  setMenuVisible(!menuVisible)
                }}
                className="title-text"
              >
                {node.data.Title}
                <span className="fr ">0{index + 1}</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Themes
