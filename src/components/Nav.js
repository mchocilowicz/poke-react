import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  render () {
    return (
      <Menu>
        <Menu.Item>
          <Link to='/'>{'PokeReact'}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/list'>{'List'}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/random'>{'Random'}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/about'>{'About'}</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
