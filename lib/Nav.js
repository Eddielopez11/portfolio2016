import React from 'react'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <span className="nav--Name">Eduardo Lopez</span>
          <ul className="nav--list">
            <li className="navList--item">
              <a className="navList--link" href="#work">work</a>
            </li>
            <li className="navList--item">
              <a className="navList--link" href="#about">about</a>
            </li>
            <li className="navList--item">
              <a className="navList--link" href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
})
