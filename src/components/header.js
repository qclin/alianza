import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
