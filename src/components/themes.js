import React, { useState } from "react"

import Theme from "./theme"
import Player from "./player"

const Themes = ({ dataEntries }) => {
  const [activeTheme, setActiveTheme] = useState(0)
  return (
    <div>
      <Player index={activeTheme + 1} />

      <nav className="flex">
        {dataEntries.map((node, index) => (
          <a
            className={activeTheme === index ? "page-nav active" : "page-nav"}
            href={`#${node.data.Identifier}`}
            onClick={() => setActiveTheme(index)}
          >
            <div className="nav-index top-nav-text">
              <span>0{index + 1}</span>
              <div className="vertical-text">
                {node.data.Identifier.replace(/_/g, " ")}
              </div>
            </div>
            <Theme data={node.data} active={activeTheme === index} />
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Themes
