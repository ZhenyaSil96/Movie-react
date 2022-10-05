import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="!#">Repo</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header