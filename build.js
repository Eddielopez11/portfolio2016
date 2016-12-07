import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './lib/Home'
import Nav from './lib/Nav'

render((
  <Router history={ hashHistory }>
    <Route path="/nav" component={ Nav }>
      <Route path="/" component={ Home }/>
    </Route>
  </Router>
), document.getElementById('app'))
