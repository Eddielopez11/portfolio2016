import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="mainPageWrapper">
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
        <div className="pageWrapper">
          <div className="intro">
            <h3 className="linkSpacer-header">
              <span id="intro"
                    className="linkSpacer-span">
              </span>
            </h3>
          </div>
          <div className="work">
            <h3 className="linkSpacer-header">
              <span id="work"
                    className="linkSpacer-span">
              </span>
            </h3>
          </div>
          <div className="about">
            <h3 className="linkSpacer-header">
              <span id="about"
                    className="linkSpacer-span">
              </span>
            </h3>
          </div>
          <div className="contact">
            <h3 id="contact"></h3>
          </div>
        </div>
      </div>
    )
  }
})
