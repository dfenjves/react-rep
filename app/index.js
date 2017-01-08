import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App'
import Layout from './components/Layout'
import LetterContainer from './containers/LetterContainer'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
        <IndexRoute component={ App } />
        <Route path="letter/:bioguide_id" component={ LetterContainer } />
    </Route>
  </Router>,
  document.getElementById('app')
);
