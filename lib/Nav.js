import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        { this.props.children }
      </div>
    )
  }
})
