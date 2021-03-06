import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import MainPage from './MainPage'
import AboutPage from './AboutPage'
import RandomPage from './RandomPage'
import ListPage from './ListPage'
import ViewPage from './ViewPage'

export default () => (
  <HashRouter>
    <div>
      <Nav />
      <Route exact path='/' component={MainPage} />
      <Route exact path='/list' component={ListPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/random' component={RandomPage} />
      <Route path='/pokemon/:pokemonId' component={ViewPage} />
    </div>
  </HashRouter>
)
