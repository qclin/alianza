import React from "react"
import { languageOptions } from "../utils/languageOptions"

const LanguageToggle = ({ setLanguage }) => {
  const options = Object.keys(languageOptions)
  return (
    <div id="language-toggle">
      {options.map(option => (
        <button
          key={option}
          className="preview"
          onClick={() => setLanguage(languageOptions[option])}
        >
          {option.toLowerCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
