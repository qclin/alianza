import React, { useState } from "react"

import Theme from "./theme"
import Player from "./player"
import About from "./about"

const Themes = ({ dataEntries }) => {
  const [active, setActive] = useState(0)
  const [menuVisible, setMenuVisible] = useState(false)
  const themesPages = dataEntries.map(node => node.data)
  themesPages.unshift({ Identifier: "00", Title: "about" })

  return (
    <div className={menuVisible ? "menu-open" : ""}>
      {active > 0 && <Player themeIndex={active} />}
      <section id="wrapper">
        {themesPages.map((theme, index) => (
          <div
            className={
              active === index && !menuVisible
                ? "is-active container"
                : "inactive container"
            }
            key={index}
          >
            <a
              className="container--inner"
              href={`#${theme.Identifier}`}
              onClick={() => {
                if (menuVisible) {
                  setMenuVisible(false)
                }
                setActive(index)
              }}
            >
              {index === 0 ? (
                <About
                  active={active}
                  setActive={setActive}
                  setMenuVisible={setMenuVisible}
                />
              ) : (
                <Theme
                  key={index}
                  data={theme}
                  isActive={active === index}
                  themeIndex={index}
                />
              )}
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
