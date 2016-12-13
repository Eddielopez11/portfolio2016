import React from 'react'
import { render } from 'react-dom'
import About from './lib/About'
import Nav from './lib/Nav'

render((
  <div className="mainPageWrapper">
    <Nav/>
    <About/>
  </div>
), document.getElementById('app'))
