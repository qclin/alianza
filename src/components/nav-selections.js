import React, { useState } from "react"

const MenuSelections = ({ dataEntries }) => {
  return (
    <div id="menu-selection" className={menuVisible ? "show" : "hide"}>
      <div className="menu-row ph3">
        <a href="/" onClick={() => setActive(0)} className="title-text">
          <span className="fr ">00</span>
        </a>
      </div>
      {dataEntries.map((node, index) => (
        <div
          key={node.data.Identifier}
          className={active == index + 1 ? "selected-row  ph3" : "ph3"}
        >
          <a
            href={`#${index}`}
            onClick={() => {
              setActive(index + 1)
              setMenuVisible(!menuVisible)
            }}
            className="title-text"
          >
            {node.data.Title}
            <span className="fr title-text">0{index + 1}</span>
          </a>
        </div>
      ))}
    </div>
  )
}
