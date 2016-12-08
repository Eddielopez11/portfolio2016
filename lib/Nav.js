import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="pageDiv">
        <div className="navigation">
          <Link className="aboutLink" to="/">About</Link>
        </div>
        { this.props.children }
      </div>
    )
  }
})
