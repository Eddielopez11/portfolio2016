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
                <a className="navList--link" href="#aboutMe">about</a>
              </li>
              <li className="navList--item">
                <a className="navList--link" href="#work">work</a>
              </li>
              <li className="navList--item">
                <a className="navList--link" href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="pageWrapper">
          <div className="about">
            <h3 id="aboutMe" className="linkSpacer-header"><span className="linkSpacer-span"></span>About me</h3>
          </div>
          <div className="work">
            <h3 id="work" className="linkSpacer-header"><span className="linkSpacer-span"></span>Work</h3>
          </div>
          <div className="contact">
            <h3 id="contact">contact</h3>
          </div>
        </div>
      </div>
    )
  }
})
