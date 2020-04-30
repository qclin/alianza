import React from "react"
import { languageOptions } from "../utils/languageOptions"

const LanguageToggle = ({ setLanguage }) => {
  const keys = Object.keys(languageOptions)
  return (
    <div id="language-toggle">
      {keys.map(key => (
        <button
          className="top-nav-text"
          onClick={() => setLanguage(languageOptions[key])}
        >
          {key.toLowerCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
