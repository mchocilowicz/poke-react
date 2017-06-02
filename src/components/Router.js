import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import MainPage from './MainPage'
import AboutPage from './AboutPage'
import RandomPage from './RandomPage'
import ListPage from './ListPage'
import ViewPage from './ViewPage'
import store from '../redux'

export default () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Nav />
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/list' component={ListPage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/random' component={RandomPage}/>
        <Route path='/pokemon/:pokemonId' component={ViewPage}/>
      </div>
    </HashRouter>
  </Provider>
)
