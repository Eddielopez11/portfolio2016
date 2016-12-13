import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="contentWrapper">
        <div className="intro">
          <h3 className="linkSpacer-header">
            <span id="intro"
                  className="linkSpacer-span">
            </span>
          </h3>
          <h2 className="intro--h1">Eduardo Lopez</h2>
          <h1 className="intro--h2">Front End Web Developer</h1>
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
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <i className="fa fa-github" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
})
