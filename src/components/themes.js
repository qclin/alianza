import React, { useState } from "react"

import Theme from "./theme"
import Player from "./player"
import About from "./about"

const Themes = ({ dataEntries }) => {
  const [active, setActive] = useState(0)
  return (
    <div>
      {active > 0 && <Player themeIndex={active} />}
      <section className="flex">
        <About active={active} setActive={setActive} />
        {dataEntries.map((node, index) => (
          <Theme
            data={node.data}
            active={active}
            setActive={setActive}
            themeIndex={index + 1}
          />
        ))}
      </section>
    </div>
  )
}

export default Themes
