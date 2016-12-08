import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="mainPageWrapper">
        <div className="about">
          <h1>About me</h1>
        </div>
        <div className="work">
          <h1>Work</h1>
        </div>
      </div>
    )
  }
})
