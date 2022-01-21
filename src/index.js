import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Shop from './views/shop'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Shop} path="/shop" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
