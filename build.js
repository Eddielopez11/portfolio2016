import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import About from './lib/About'
import Nav from './lib/Nav'

render((
  <Router history={ hashHistory }>
    <Route path="/nav" component={ Nav }>
      <Route path="/" component={ About }/>
    </Route>
  </Router>
), document.getElementById('app'))
