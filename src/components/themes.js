import React, { useState } from "react"

import Theme from "./theme"
import Player from "./player"
import About from "./about"

const Themes = ({ dataEntries }) => {
  const [active, setActive] = useState(0)
  const [menuVisible, setMenuVisible] = useState(false)
  const themesPages = dataEntries.map(node => node.data)
  console.log(themesPages)
  return (
    <div className={menuVisible ? "menu-open" : ""}>
      {active > 0 && <Player themeIndex={active} />}
      <section id="wrapper">
        <About
          active={active}
          setActive={setActive}
          setMenuVisible={setMenuVisible}
        />
        {dataEntries.map((node, index) => (
          <div
            className={
              active === index + 1 && !menuVisible
                ? "is-active container"
                : "inactive container"
            }
            key={index + 1}
          >
            <a
              className="container--inner"
              href={`#${node.data.Identifier}`}
              onClick={() => {
                setMenuVisible(!menuVisible)
                setActive(index + 1)
              }}
            >
              <Theme
                key={index}
                data={node.data}
                isActive={active === index + 1}
                themeIndex={index + 1}
              />
            </a>
          </div>
        ))}
      </section>
      <section id="mobile-navigation">
        <div id="docked-menu">
          <button
            className="c-apple"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            menu
          </button>
        </div>
      </section>
    </div>
  )
}

export default Themes
