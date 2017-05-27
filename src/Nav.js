import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  render () {
    return (
      <Menu>
        <Menu.Item name='PokeReact' />
        <Menu.Item name='List' />
        <Menu.Item name='Random' />
        <Menu.Item name='About' />
      </Menu>
    )
  }
}
