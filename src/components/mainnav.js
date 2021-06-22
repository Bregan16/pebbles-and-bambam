import React from "react"
import { Link } from "gatsby"

import style from "./mainnav.module.css"

const MainNav = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/day-1">Tag 1</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
